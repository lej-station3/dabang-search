import React from 'react';
import { CategoryText, SearchIcon, Sub, RoomText, CategoryEtcText  } from './styled';

function useResult(keyword) {
  function highlightColor(value){
    // const keywordValue = value.split(keyword);
    const resultValue = keyword.split(value); //키워드값만
    const result = value.split(resultValue);
    console.log('키워드',result);
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
  
  // var array = [];
  // array.push(JSON.parse(localStorage.getItem('save')));
  // localStorage.setItem('save',JSON.stringify(array));

  function handleClick(result) {
    //result의 값을 obj에 넣고 obj를 push 하는걸로 
    // const obj = {
    //   address: '',
    //   child: [],
    //   filter: null,
    //   id: '',
    //   location: null,
    //   name: '',
    //   type: '',
    //   zoom: 0,
    // };

    // const getArray = JSON.parse(localStorage.getItem('saveSearch')) || [];
    // getArray.push(result);
    // localStorage.setItem('saveSearch', JSON.stringify(getArray));
    
    
    const getArray = JSON.parse(localStorage.getItem('saveSearch')) || [];
    getArray.push(result);
    localStorage.setItem('saveSearch',JSON.stringify(getArray));


    
    // 1. 중복체크
    // 2. 10개 이상인 경우에 마지막 아이템 삭제하고 push
    // 3. push
    // 4. 검색창 초기화
    

    // const saveSearch = [result];
    // saveSearch.push(result);
    // localStorage.setItem('saveSearch', JSON.stringify(saveSearch));

    // localStorage.getItem('saveSearch');
    
    // var array = [];
    // array = JSON.parse(localStorage.getItem('save'));
    // array.push(result);
    // localStorage.setItem('save',JSON.stringify(array));
  }

  return { 
    printSubList,
    printOfficeList,
    printAptList,

  };
}
export default useResult;
