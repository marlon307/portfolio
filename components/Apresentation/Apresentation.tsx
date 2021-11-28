import React from 'react';
import Me from './Me';
import style from './style.module.scss';

const Apresentation = function Apresentation() {
  return (
    <section className={ style.apresentation }>
      <h2>Site em manutenção &#x1F6A7;</h2>
      <Me />
      <h2>Site em manutenção &#x1F6A7;</h2>
    </section>
  );
};

export default Apresentation;
