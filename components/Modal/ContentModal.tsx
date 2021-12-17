import React from 'react';
import ReactDOM from 'react-dom';

type ContentModalProps = {
  children: React.ReactNode
}

const ContentModal = function ContentModal({ children }: ContentModalProps) {
  if (typeof window === 'undefined') return null;

  const getModal = document.getElementById('modal')!;

  return (
    ReactDOM.createPortal(children, getModal)
  );
};

export default ContentModal;
