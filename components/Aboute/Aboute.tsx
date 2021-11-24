import React from 'react';
import Dev from '../Svg/Dev';
import style from './style.module.scss';

const Aboute = function Aboute() {
  return (
    <section className={ style.aboute }>
      <h1>SOBRE</h1>
      <div className={ style.content }>
        <div>
          <p>
            Fazer o que gosto, porque dessa maneira a vida flui bem melhor.
            Apaixonado pela tecnologia onde consigo colocar ideias em codigo.
          </p>
        </div>
        <div>
          <Dev />
        </div>
      </div>
    </section>
  );
};

export default Aboute;
