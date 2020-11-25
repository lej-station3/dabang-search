import React from 'react';

import { Subway, Apt, Officetel, Ul, CartegortTitle  } from './styled';

function printEtcList(subList) {
  return subList.map(item => {
    const type = item.type;
    console.log('아이템',item);
    console.log('타입',type);
    console.log('섭웨이',item.subways);
    switch(type){
      case type === 'subway':
        return(
          <div>{item.name} </div>
        );
      case type === 'region':
        break;
      default:
        return item;
    }
    return(
      { item }
    );
  
  });
}

function SearchResult({ subList, aptList, etcList, total }) {
  if (total <= 0) {
    return (
      <p>잠시만여</p>
    );
  }

  return(
    <Ul>
      <Subway>
        <CartegortTitle>지역,지하철,대학교</CartegortTitle>
        {printEtcList(subList)}
      </Subway>
      <Apt>
        <CartegortTitle>오피스텔</CartegortTitle>
        {etcList.map(etc => (
          <ul>
            <li>{etc.name}</li>
            <li>{etc.complex_address}</li>
          </ul>
        ))}
      </Apt>
      <Officetel>
        <CartegortTitle>아파트</CartegortTitle>
        {aptList.map(apt => (
          <ul>
            <li>{apt.name}</li>
            <li>{apt.complex_address}</li>
          </ul>
        ))}
      </Officetel>
    </Ul>
  );
}

export default SearchResult;