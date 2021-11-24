import React from 'react';
import Me from './Me';
import style from './style.module.scss';

const Apresentation = function Apresentation() {
  return (
    <section className={ style.apresentation }>
      <Me />
    </section>
  );
};

export default Apresentation;
