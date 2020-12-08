function useLocalStorge() {  
  /**
   * 
   * @param {*} name storage name
   * @return storage value
   */
  function getStorage(name) {
    const datas = JSON.parse(localStorage.getItem(name)) ?? [];
    return datas;
  }

  function setSearchHistoryStorage(item) {
    const getInfo = getStorage('saveSearch');
    const idx = getInfo.findIndex(history => history.id === item.id);
    
    if (idx !== -1) {
      const delArray = getInfo.splice(idx, 1);
      getInfo.unshift(...delArray);
    } else {
      getInfo.unshift(item);
    }

    if(getInfo.length > 10) {
      getInfo.splice(10,1);
    }

    localStorage.setItem('saveSearch', JSON.stringify(getInfo));
  }

  // function setRecentRegionHistory() {

  // }

  return { getStorage, setSearchHistoryStorage };
};

export default useLocalStorge;
