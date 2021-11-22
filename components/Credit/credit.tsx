import React from 'react';
import style from './style.module.scss';

function credit() {
  return (
    <section className={ style.credit }>
      <h1>CRÉDITOS</h1>
      <article>
        <h2>Design do portfólio</h2>
        <div>
          <p>logancee</p>
          <a href="https://dribbble.com/logancee" target="_blank" rel="noopener noreferrer">https://dribbble.com/logancee</a>
        </div>
        <div>
          <p>Cubo</p>
          <a href="https://3dtransforms.desandro.com/cube" target="_blank" rel="noopener noreferrer">https://3dtransforms.desandro.com/cube</a>
        </div>
      </article>
      <article>
        <h2>Icones</h2>
        <div>
          <p>icons8.com</p>
          <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">https://icons8.com/</a>
        </div>
        <div>
          <p>Feather Icons</p>
          <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">https://feathericons.com/</a>
        </div>
      </article>
      <article>
        <h2>Código</h2>
        <div>
          <p>GitHub</p>
          <a href="https://github.com/marlon307/portfolio" target="_blank" rel="noopener noreferrer">https://github.com/marlon307/portfolio</a>
        </div>
      </article>
    </section>
  );
}

export default credit;
