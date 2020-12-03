import React from 'react';
import { CategoryText, SearchIcon, Sub, RoomText, CategoryEtcText } from './styled';

function useResult(keyword, recentHistory) {
  function highlightColor(value) {
    // const keywordValue = value.split(keyword);
    const resultValue = keyword.split(value); //키워드값만
    const result = value.split(resultValue);
    return (
      <div>
        <span style={{ color: 'blue' }}>{resultValue}</span> 
        <span>{result}</span>
      </div>
    );
  }
  function printSubList(subList) {
    return subList.map(item => {
      const type = item.type;  
      const roomType = item.filter;
      switch(type) {
        case 'subway':
          return (
            //이렇게 감싸주지 않으면 리스트가 다 나올 때마다 겁나 돈다 다나옴 
            <CategoryText key={item.id} onClick={() => handleClick(item)}>
              <div>{highlightColor(item.name)}</div>
              {/* <div>{item.name}</div> */}
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

  function handleClick(result) {
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
        color: '#000',
      }];
    }

    switch (result.type) {
      case 'region':
        temp.id = result.code;
        temp.name = result.name;
        temp.full_name = result.full_name;
        //code
        break;
      case 'subway':
        let lines = [];
        temp.id = result.id;
        temp.name = result.name;
        lines = result.subways && result.subways.map(line => {
          return {
            name: line.shortName,
            color: line.color,
          };
        });
        temp.child = [...temp.child, ...lines];
        break;
      case 'univ':
        temp.id = result.id;
        temp.name = result.name;
        break;
      case 'complex':
        temp.id = result.complex_id;
        temp.name = result.name;
        temp.address = result.complex_address;
        break;
      default :
        break;
    }

    // const serchHistory = JSON.parse(localStorage.getItem('saveSearch')) || [];
    // 중복되는 게 뭔지 찾고 
    const idx = serchHistory.findIndex(history => history.id === temp.id);
    console.log('idx',idx);
    //중복값이 있을 경우!!! 에 대한 조건식이 필요했다!! 
    if (idx !== -1) {
      const delIdx = serchHistory.splice(idx, 1);
      //delIdx를 넣어주면 배열로 들어가게됨 그래서 풀어주는 과정이 필요했음!!!
      serchHistory.unshift(...delIdx);
      console.log(serchHistory);
    } else {
      serchHistory.push(temp); //temp
    }
    serchHistory.length > 11 && serchHistory.splice(-2, 1);
    localStorage.setItem('saveSearch',JSON.stringify(serchHistory)); 
  }

  const serchHistory = JSON.parse(localStorage.getItem('saveSearch')) || [];

  function recentLocalStorage(serchHistory) {
    return serchHistory.map(item => {
      console.log(item);
      const type = item.type;  
      const etcType = item.child;
      console.log('ss',etcType);
      switch(type) {
        case 'subway':
          return (
            <CategoryText key={item.id}>
              <span>{item.name}</span>
              <SearchIcon>
                {etcType.map((etc, key) => {
                  const isFilter = ['원룸', '투룸', '쓰리룸', '오피스텔', '아파트'].includes(etc.name);

                  return (
                    <Sub key={key} color={etc.color} isFilter={isFilter}>{etc.name}</Sub>
                  );
                })} 
              </SearchIcon>
            </CategoryText>
          );
  
        case 'complex':
          return (
            <CategoryEtcText key={item.complex_id}>
              <span>{item.name}</span>
              <span className="adress">{item.complex_address}</span>
              {etcType &&
                <SearchIcon>
                  {etcType && etcType.map((etc, key) => (
                    <RoomText key={etc.complex_id}><span>{etc.name}</span></RoomText>
                  ))}
                </SearchIcon>
              }
            </CategoryEtcText>
          );
  
        default:
          return (
            <CategoryText key={item.type === 'region' ? item.code : item.id}>
              {
                item.type === 'region' ?
                  <span>{item.full_name}</span>
                  :
                  <span>{item.name}</span>
              }
              <SearchIcon>
                {etcType && (
                  <RoomText>
                    {etcType.map((etc, key) => (
                      <span key={key}>{etc.name}</span>
                    ))}
                  </RoomText>
                )}
              </SearchIcon>
            </CategoryText>
          );
      }
    });
  }
  
  return { 
    printSubList,
    printOfficeList,
    printAptList,
    recentLocalStorage,
    serchHistory,
  };
}
export default useResult;



// if (idx !== -1) {
//   serchHistory.splice(idx, 1);
//   serchHistory.unshift(temp);
// } else {
//   serchHistory.push(temp); //temp
// }
