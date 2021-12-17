import { useEffect } from 'react';

function useOutSideClick(ref: any, callback: Function) {
  useEffect(() => {
    function handleClick({ target }: any) {
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback, ref]);
}

export default useOutSideClick;
