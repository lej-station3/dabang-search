import { useEffect } from 'react';

// 폼이 열렸으면 true인 상태!! 
// 돔의 값이 있고 돔에 타겟이 없으면 useOutSide를 실행해보고
// true라면 false로 만들어라 

function useOutSide(ref, handler) {
  const openResult = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler && handler(false);
    } else {
      handler && handler(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', openResult);
    return () => {
      document.removeEventListener('click', openResult);
    };
  }, [ref, openResult]);
}
export default useOutSide;
