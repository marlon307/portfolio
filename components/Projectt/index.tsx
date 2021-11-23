import React from 'react';
import style from './style.module.scss';

function index() {
  return (
    <section id="project" className={ style.projects }>
      <h1>PROJETOS</h1>
      <div className={ style.contframe }>
        <iframe
          title="https://www.respponse.com/"
          src="https://www.respponse.com/"
          allowFullScreen
        />
        <a href="https://www.respponse.com/" target="_blank" rel="noopener noreferrer">https://www.respponse.com/</a>
      </div>
    </section>
  );
}

export default index;
