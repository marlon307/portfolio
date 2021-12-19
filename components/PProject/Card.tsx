import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';

type CardProps = {
  number: number | string;
  name: string;
  url: any;
  link: string;
}

const Card = function Card({
  number, name, url, link,
}: CardProps) {
  return (
    <a href={ link } target="_blank" rel="noopener noreferrer" className={ style.cardproject }>
      <div>
        <p>{ name }</p>
        <h2>{ number }</h2>
      </div>
      <div>
        <picture>
          <Image
            quality={ 100 }
            src={ url }
            width={ 300 }
            height={ 240 }
            layout="responsive"
            objectFit="cover"
          />
        </picture>
      </div>
    </a>
  );
};

export default Card;
