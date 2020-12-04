import { useEffect, useRef, useState } from 'react';

function useOutSide() {
  const [isOpen, setIsOpen] = useState(false);
  const _open = useRef(null);

  const openResult = e => {
    if (_open.current && !_open.current.contains(e.target)) {
      setIsOpen && setIsOpen(false);
     
    } else { 
      setIsOpen && setIsOpen(true);
    };
  };

  useEffect(() => {
    document.addEventListener('click', openResult);
    return () => {
      document.removeEventListener('click', openResult);
    };
  }, [_open, openResult]);

  return {
    _open,
    isOpen,
  };
}

export default useOutSide;
