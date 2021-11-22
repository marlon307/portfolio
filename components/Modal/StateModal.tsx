import { useEffect } from 'react';

type TModalProps = {
  isOpen: boolean;
}

const StateModal = function StateModal({ isOpen }: TModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('hidden');
    } else {
      document.body.removeAttribute('class');
    }
  }, [isOpen]);

  return null;
};

export default StateModal;
