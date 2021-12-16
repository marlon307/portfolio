import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';

type CardProps = {
  number: number | string;
  name: string;
  url: string;
}

const Card = function Card({ number, name, url }: CardProps) {
  return (
    <div className={ style.cardproject }>
      <div>
        <p>{ name }</p>
        <h2>{ number }</h2>
      </div>
      <div>
        <picture>
          <Image
            quality={ 100 }
            src={ url }
            layout="responsive"
            objectFit="scale-down"
          />
        </picture>
      </div>
    </div>
  );
};

export default Card;
