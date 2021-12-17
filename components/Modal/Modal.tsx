import React from 'react';
import cx from 'classnames';
import style from './style.module.scss';

type ModalProps = {
  active: boolean;
}

const Modal = function Modal({ active }: ModalProps) {
  return (
    <div
      id="modal"
      className={ cx(style.modal, {
        [style.active]: active,
      }) }
    />
  );
};

export default Modal;
