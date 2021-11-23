import React from 'react';
import About from './About';
import style from './style.module.scss';
import photo from '../../assets/download.jpeg';

function index() {
  return (
    <section id="about" className={ style.aboutme }>
      <h1>Sobre</h1>
      <About
        img={ photo }
        title="Marlon Ramos"
        paragraph="Atualmente estudo desenvolvimento web Full-Stack em busca de realocação no mercado da tecnologia."
      />
      <div className={ style.aboutmeinfos } />
    </section>
  );
}

export default index;
