import React from 'react';

import useLocalStorge from '../../../hooks/useLocalStorage';

import { 
  CategoryText, SearchIcon, Sub, 
  RoomTypeText, CategoryEtcText,
} from './styled';

function useResult(close) {
  const { setSearchHistoryStorage } = useLocalStorge();

  function printSubList(subList) {
    return subList.map(item => {
      const type = item.type;  
      const roomType = item.filter;
      switch(type) {
        case 'subway':
          return (
            <CategoryText key={item.id} onClick={() => handleClick(item)}>
              <div>{item.name}</div>
              <SearchIcon>
                {roomType && (
                  <RoomTypeText><span>{roomType.main_room_type_str}</span></RoomTypeText>
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
                  <RoomTypeText><span>{roomType.main_room_type_str}</span></RoomTypeText>
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

    setSearchHistoryStorage(temp);
    // 값을 클릭하고 나면 close 할 수 있도록 해야함!! 
    close();
  }


  return { 
    printSubList,
    printOfficeList,
    printAptList,
  };
}
export default useResult;
