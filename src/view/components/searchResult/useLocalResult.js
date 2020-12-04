import React from 'react';
import { 
  CategoryText, SearchIcon, Sub, 
  LocalCategoryEtcText, RoomText
} from './styled';

function useLocalResult() {
  function recentLocalStorage(serchHistory) {
    return serchHistory.map(item => {
      const type = item.type;  
      const etcType = item.child;
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
            <LocalCategoryEtcText key={item.complex_id}>
              <span>{item.name}</span>
              <span className="adress">{item.complex_address}</span>
              {etcType &&
                <SearchIcon>
                  {etcType && etcType.map(etc => (
                    <RoomText key={etc.complex_id}><span>{etc.name}</span></RoomText>
                  ))}
                </SearchIcon>
              }
            </LocalCategoryEtcText>
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
    recentLocalStorage
  };
}

export default useLocalResult;
