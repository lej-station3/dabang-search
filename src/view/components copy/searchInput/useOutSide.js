import { useCallback, useEffect, useRef, useState } from 'react';

function useOutSide() {
  const [isOpen, setIsOpen] = useState(false);
  const _open = useRef(null);

  const openResult = useCallback(
    e => {
      if (_open.current && !_open.current.contains(e.target)) {
        setIsOpen(false);
       
      } else { 
        setIsOpen(true);
      };
    },
    []
  );

  useEffect(() => {
    document.addEventListener('click', openResult);
    return () => {
      document.removeEventListener('click', openResult);
    };
  }, [openResult]);

  return {
    _open,
    isOpen,
    setIsOpen,
  };
}

export default useOutSide;
