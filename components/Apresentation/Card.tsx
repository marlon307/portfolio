import React from 'react';
import style from './style.module.scss';

const Card = function Card() {
  return (
    <div className={ style.card }>
      <p>Desenvolvedor Full-Stack</p>
      <p>Next.js & Node.Js</p>
    </div>
  );
};

export default Card;
