import React from 'react';
import style from './style.module.scss';

const Me = function Me() {
  return (
    <div className={ style.me }>
      <span>&#x1F44B;&#x1F3FB;</span>
      <div>
        <span>Oi, eu sou</span>
        <span>Marlon</span>
      </div>
    </div>
  );
};

export default Me;
