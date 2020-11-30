import React from 'react';
import { CategoryText, SearchIcon, Sub, RoomText, CategoryEtcText  } from './styled';

function useResult(keyword) {
  function highlightColor(value){
    // const keywordValue = value.split(keyword);
    const resultValue = keyword.split(value); //키워드값만
    const result = value.split(resultValue);
    console.log('키워드',result);
    return(
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
      
      switch(type){
        case 'subway':
          return (
            <CategoryText>
              <div>{highlightColor(item.name)}</div>
              <SearchIcon>
                {roomType && (
                  <RoomText><span>{roomType.main_room_type_str}</span></RoomText>
                )}
                {item.subways.map(sub => (
                  <Sub color={sub.color}>{sub.shortName}</Sub>
                ))}
               
              </SearchIcon>
            </CategoryText>
          );
        default:
          return (
            <CategoryText key={item.id}>
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
    console.log('필터', officeList);
    return officeList.map(office => {
      return(
        <CategoryEtcText>
          <p>{office.name}</p>
          <p className="adress">{office.complex_address}</p>
        </CategoryEtcText>
      );
    });
  }
  
  function printAptList(aptList) {
    return aptList.map(apt => (
      <CategoryEtcText>
        <p>{apt.name}</p>
        <p className="adress">{apt.complex_address}</p>
      </CategoryEtcText>
    ));
  }

  return { 
    printSubList,
    printOfficeList,
    printAptList,
  };
}
export default useResult;
