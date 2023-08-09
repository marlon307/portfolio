import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';

type CardProps = {
  number: number | string;
  name: string;
  url: any;
  link: string;
  desc: string;
}

const Card = function Card({
  number, name, url, link, desc,
}: CardProps) {
  return (
    <a href={ link } target="_blank" rel="noopener noreferrer" className={ style.cardproject }>
      <div className={ style.desc }>
        <p>{ desc }</p>
        <dl className={ style.info }>
          <dt>{ name }</dt>
          <dl>{ number }</dl>
        </dl>
      </div>
      <div>
        <picture className={ style.picture }>
          <Image
            quality={ 100 }
            src={ url }
            width={ 300 }
            height={ 240 }
            alt={ name }
          />
        </picture>
      </div>
    </a>
  );
};

export default Card;
