import React from 'react';
import { 
  CategoryText, SearchIcon, Sub, 
  RoomText, CategoryEtcText,
} from './styled';

function useResult(keyword) {

  function highlightColor(value) {
    const resultValue = keyword.split(' ');
    const firstResultValue = resultValue[0];
    const result = value.split(resultValue);
    return (
      <div>
        <span style={{ color: 'blue' }} >{firstResultValue}</span> 
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
                  // <p>{highlightColor(item.full_name)}</p>
                  <p>{item.full_name}</p>
                  :
                  // <p>{highlightColor(item.name)}</p>
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
    console.log(officeList);
    return officeList.map(office => {
      return (
        <CategoryEtcText key={office.complex_id} onClick={() => handleClick(office)}>
          {/* <p>{highlightColor(office.name)}</p> */}
          <p>{office.name}</p>
          <p className="adress">{office.complex_address}</p>
        </CategoryEtcText>
      );
    });
  }
  
  function printAptList(aptList) {
    return aptList.map(apt => (
      <CategoryEtcText key={apt.complex_id} onClick={() => handleClick(apt)}>
        {/* <p>{highlightColor(apt.name)}</p> */}
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
    const idx = serchHistory.findIndex(history => history.id === temp.id);
    if (idx !== -1) {
      const delIdx = serchHistory.splice(idx, 1);
      serchHistory.unshift(...delIdx);
    } else {
      serchHistory.push(temp); 
    }
    serchHistory.length > 11 && serchHistory.splice(-2, 1);
    localStorage.setItem('saveSearch',JSON.stringify(serchHistory)); 
  }

  const serchHistory = JSON.parse(localStorage.getItem('saveSearch')) || [];

  return { 
    printSubList,
    printOfficeList,
    printAptList,
    serchHistory,
  };
}
export default useResult;
