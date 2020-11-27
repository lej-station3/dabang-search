import React from 'react';
import { CategoryText, SubwayIcon, SubIcon, Sub,  RoomIcon, RoomText, CategoryEtcText  } from './styled';

function useResult() {
  function printSubList(subList) {
    return subList.map(item => {
      const type = item.type;
      // type ==='subway' 가 아니다!!!!! 걍 그 값이 들어가야,,,
      const roomType = item.filter;
      switch(type){
        case 'subway':
          return (
            <CategoryText>
              <p>{item.name}</p>
              <SubwayIcon>
                <SubIcon>
                  {item.subways.map(sub => (
                    <Sub color={sub.color}>{sub.shortName}</Sub>
                  ))}
                </SubIcon>
                {roomType && (
                  <RoomIcon>
                    <RoomText><span>{roomType.main_room_type_str}</span>)</RoomText>
                  </RoomIcon>
                )}
              </SubwayIcon>
            </CategoryText>
          );
        case 'region':
          return (
            <CategoryText>{item.full_name}</CategoryText>
          );
        case 'univ':
          return (
            <CategoryText>{item.name}</CategoryText>
          );
        default:
          return (
            <CategoryText>{item.name}</CategoryText>
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
  
  function pringAptList(aptList) {
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
    pringAptList,
  };
}
export default useResult;
