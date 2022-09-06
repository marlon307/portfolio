import { useEffect } from 'react';

const useOutsideClick = (ref: any, callback: Function) => {
  useEffect(() => {
    const handleClick = (event: { target: any; }) => {
      const contentModal = ref.current?.contains(event.target);

      if (ref.current && !contentModal) {
        callback(false);
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [callback, ref]);
};

export default useOutsideClick;
