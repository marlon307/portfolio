import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useOutSideClick from '../../Hooks/useOutSideClick';
import style from './style.module.scss';

type ContentModalProps = {
  children: React.ReactNode
  active: boolean;
  functionTogle: Function;
}

const ContentModal = function ContentModal({ children, active, functionTogle }: ContentModalProps) {
  if (typeof window === 'undefined') return null;

  const getModal = document.getElementById('modal')!;
  const modalRef = useRef(null);

  useOutSideClick(modalRef, () => {
    if (active) functionTogle(false);
  });

  useEffect(() => {
    if (active) {
      getModal.classList.add(style.active);
    } else {
      getModal.classList.remove(style.active);
    }
  }, [active, getModal.classList]);

  return (
    getModal
      ? ReactDOM.createPortal(
        <div className={ style.content } ref={ modalRef }>
          { active && children }
        </div>,
        getModal,
      )
      : null
  );
};

export default ContentModal;
