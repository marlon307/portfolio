import React from 'react';
import Card from './Card';
import style from './style.module.scss';

const Project = function Project() {
  return (
    <section className={ style.projects }>
      <h1>Projetos.</h1>
      <div className={ style.mural }>
        <Card number="1" name="Projeto Respponse" />
        <Card number="2" name="HowlingDawn" />
      </div>
    </section>
  );
};

export default Project;
