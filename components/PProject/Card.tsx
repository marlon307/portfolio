import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';

type CardProps = {
  number: number | string;
  name: string;
  url: any;
}

const Card = function Card({ number, name, url }: CardProps) {
  return (
    <a href="http://" target="_blank" rel="noopener noreferrer" className={ style.cardproject }>
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
    </a>
  );
};

export default Card;
