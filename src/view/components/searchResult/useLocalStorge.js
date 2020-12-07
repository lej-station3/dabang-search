import React from 'react';

function UseLocalStorge(temp) {
  const searchHistory = JSON.parse(localStorage.getItem('saveSearch')) || [];
  
  const idx = searchHistory.findIndex(history => history.id === temp.id);
  if (idx !== -1) {
    const delArray = searchHistory.splice(idx, 1);
    searchHistory.unshift(...delArray);
  } else {
    searchHistory.unshift(temp);
  }
  if(searchHistory.length > 10) {
    searchHistory.splice(10, 1);
  }

  localStorage.setItem('saveSearch', JSON.stringify(searchHistory)); 
  
  return{
    searchHistory
  };
};

export default UseLocalStorge;