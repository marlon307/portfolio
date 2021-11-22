import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';

type TAboutPros = {
  img: any;
  title: string;
  paragraph: string;
}

const About = function About({ img, title, paragraph }: TAboutPros) {
  return (
    <div id="about" className={ style.about }>
      <figure>
        <Image
          src={ img }
          alt={ title }
          objectPosition="responsive"
          quality={ 100 }
        />
      </figure>
      <div>
        <p>{ paragraph }</p>
        <span>{ title }</span>
      </div>
    </div>
  );
};

export default About;
