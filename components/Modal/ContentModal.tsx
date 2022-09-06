import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../Hooks/useOutSideClick';
import style from './style.module.scss';

type PModal = {
  children: any,
  isOpen: boolean;
  openModal: Function;
};

function ContentModal({ children, isOpen, openModal }: PModal) {
  const modalRef = useRef<HTMLDivElement>(null);
  const getModal = children && isOpen && document.getElementById('modal');

  useOutsideClick(modalRef, () => isOpen && openModal(false));

  useEffect(() => {
    if (isOpen) {
      getModal.classList.add(style.active);
      document.body.classList.add('hidden');
    }

    return () => {
      if (children && isOpen) {
        getModal.classList.remove(style.active);
        document.body.removeAttribute('class');
      }
    };
  }, [children, getModal.classList, isOpen]);

  return children && isOpen && createPortal(
    <div
      ref={ modalRef }
      className={ style.content_modal }
    >
      { children }
    </div>,
    getModal,
  );
}

export default ContentModal;
