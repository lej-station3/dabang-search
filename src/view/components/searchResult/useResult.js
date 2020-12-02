import React from 'react';
import { CategoryText, SearchIcon, Sub, RoomText, CategoryEtcText  } from './styled';

function useResult(keyword) {
  // function highlightColor(value) {
  //   // const keywordValue = value.split(keyword);
  //   const resultValue = keyword.split(value); //키워드값만
  //   const result = value.split(resultValue);
  //   return (
  //     <div>
  //       <span style={{ color: 'blue' }}>{resultValue}</span> 
  //       <span>{result}</span>
  //     </div>
  //   );
  // }
  function printSubList(subList) {
    return subList.map(item => {
      const type = item.type;  
      const roomType = item.filter;
      switch(type) {
        case 'subway':
          return (
            //이렇게 감싸주지 않으면 리스트가 다 나올 때마다 겁나 돈다 다나옴 
            <CategoryText key={item.id} onClick={() => handleClick(item)}>
              {/* <div>{highlightColor(item.name)}</div> */}
              <div>{item.name}</div>
              <SearchIcon>
                {roomType && (
                  <RoomText><span>{roomType.main_room_type_str}</span></RoomText>
                )}
                {item.subways.map((sub, key) => (
                  <Sub key={key} color={sub.color}>{sub.shortName}</Sub>
                ))} 
              </SearchIcon>
            </CategoryText>
          );

        default:
          return (
            <CategoryText key={item.type === 'region' ? item.code : item.id} onClick={() => handleClick(item)}>
              {
                item.type === 'region' ?
                  <p>{item.full_name}</p>
                  :
                  <p>{item.name}</p>
              }
              <SearchIcon>
                {roomType && (
                  <RoomText><span>{roomType.main_room_type_str}</span></RoomText>
                )}
              </SearchIcon>
            </CategoryText>
          );
      }
    });
  }
  
  function printOfficeList(officeList) {
    return officeList.map(office => {
      return (
        <CategoryEtcText key={office.complex_id} onClick={() => handleClick(office)}>
          <p>{office.name}</p>
          <p className="adress">{office.complex_address}</p>
        </CategoryEtcText>
      );
    });
  }
  
  function printAptList(aptList) {
    return aptList.map(apt => (
      <CategoryEtcText key={apt.complex_id} onClick={() => handleClick(apt)}>
        <p>{apt.name}</p>
        <p className="adress">{apt.complex_address}</p>
      </CategoryEtcText>
    ));
  }

  // function changeResult(result) {
  //   const type = result.complex_type;
  //   switch (type) {
  //     case null :
  //       return etcObj;
  //     case 0 :
  //       return atpObj;
  //     case 1 :
  //       return officeObj; 
  //     default:
  //       return;
  //   }
  // }

  function handleClick(result) {
    console.log('result',result);
    const temp = {
      child: [],
      full_name: '',
      id: '',
      name: '',
      type: result.type,
    };

    if (result.filter) {
      temp.child = [{
        name: result.filter.main_room_type_str,
        color: '#fff',
      }];
    }

    switch (result.type) {
      case 'region':
        temp.name = result.name;
        temp.full_name = result.full_name;
        //code
        temp.id = result.code;
        break;
      case 'subway':
        let lines = [];
        temp.name = result.name;
        temp.id = result.id;
        lines = result.subways && result.subways.map(line => {
          return {
            name: line.shortName,
            color: line.color,
          };
        });
        temp.child = [...temp.child, ...lines];
        break;
      case 'univ':
        temp.name = result.name;
        temp.id = result.id;
        break;
      case 'complex':
        temp.name = result.name;
        temp.id = result.complex_id;
        temp.address = result.complex_address;
        break;
      default :
        break;
    }
    const getArray = JSON.parse(localStorage.getItem('saveSearch')) || [];

    getArray.push(temp);
    localStorage.setItem('saveSearch',JSON.stringify(getArray)); 
    console.log('푸시된배열',getArray);

    return temp;

    // 1. 중복체크
    // 2. 10개 이상인 경우에 마지막 아이템 삭제하고 push
    // 3. push
    //4. 뿌려주기
  }

  return { 
    printSubList,
    printOfficeList,
    printAptList,
  };
}
export default useResult;
