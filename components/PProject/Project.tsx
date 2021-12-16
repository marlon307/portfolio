import React from 'react';
import Card from './Card';
import style from './style.module.scss';
import teste from '../../assets/icons8-futurama-bender.svg';

const Project = function Project() {
  return (
    <section className={ style.projects }>
      <div className={ style.titlesection }>
        <h1>Projetos.</h1>
        <span>Projetos próprios e quais eu já participei.</span>
      </div>
      <div className={ style.mural }>
        <Card url={ teste } number="1" name="Respponse" />
        <Card url={ teste } number="2" name="HowlingDawn" />
      </div>
    </section>
  );
};

export default Project;
