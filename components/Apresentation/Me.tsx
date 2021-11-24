import React from 'react';
import style from './style.module.scss';

const Me = function Me() {
  return (
    <div className={ style.me }>
      <p>&#x1F44B;&#x1F3FB;</p>
      <div>
        <span>Olá, sou o </span>
        <span>Marlon</span>
        <span>!</span>
      </div>
      <p>Desenvolvedor Full-Stack</p>
    </div>
  );
};

export default Me;
