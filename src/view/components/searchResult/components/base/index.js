
import React from 'react';

import useLocalStorage from '../../../../../hooks/useLocalStorage';

import { 
  CategoryText, SearchIcon, Sub, 
  LocalCategoryEtcText, RoomText
} from './styled';

function BaseComponent() {
  const { getStorage } = useLocalStorage();
  const getHistory = getStorage('saveSearch');

  return (
    getHistory.map(item => {
      const type = item.type;  
      const etcType = item.child;
      switch(type) {
        case 'subway':
          return (
            <CategoryText key={item.id}>
              {/* 호버 만들기 */}
              <span>{item.name}</span>
              <SearchIcon>
                {etcType.length > 0 && etcType.map((etc, key) => {
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
            <LocalCategoryEtcText key={item.id}>
              <span>{item.name}</span>
              <span className="adress">{item.complex_address}</span>
              {/* length > 0 안해주면 bolder값만 나옴 */}
              {/* ?. 해주면 etcType && 안해도댐 */}
              {etcType?.length > 0 &&
                <SearchIcon>
                  {etcType && etcType.map((etc,index) => (
                    <RoomText key={index}><span>{etc.name}</span></RoomText>
                  ))}
                </SearchIcon>
              }
            </LocalCategoryEtcText>
          );
  
        default:
          return (
            <CategoryText key={item.type === 'region' ? item.code : item.id}>
              {item.type === 'region' ? (
                <span>{item.full_name}</span>
              ) : (
                <span>{item.name}</span>
              )}
              <SearchIcon>
                {etcType.length > 0 && etcType && (
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
    })
  );
}

export default BaseComponent;
