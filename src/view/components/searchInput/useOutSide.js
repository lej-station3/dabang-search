import { useEffect } from 'react';

function useOutSide(ref,callback){
  const openResult = e => {
    if(!ref.current?.contains(e.target)){
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click',openResult, false);
    return() => {
      document.removeEventListener('click',openResult);
    };
  },[ref, openResult]);

}

export default useOutSide;