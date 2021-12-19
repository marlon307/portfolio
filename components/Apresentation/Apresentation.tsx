import React from 'react';
import Dev from '../Svg/Dev';
import Me from './Me';
import style from './style.module.scss';

const Apresentation = function Apresentation() {
  return (
    <section className={ style.apresentation }>
      <Me />
      <picture>
        <Dev />
      </picture>
    </section>
  );
};

export default Apresentation;
