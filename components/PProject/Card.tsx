import React from 'react';
import style from './style.module.scss';

type CardProps = {
  number: number | string;
  name: string;
}

const Card = function Card({ number, name }: CardProps) {
  return (
    <div className={ style.cardproject }>
      <div>
        <p>{ name }</p>
        <h2>{ number }</h2>
      </div>
      <div>
        sdsd
      </div>
    </div>
  );
};

export default Card;
