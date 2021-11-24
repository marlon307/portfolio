import React, { useState } from 'react';
import style from './style.module.scss';

const Carousel = function Carousel() {
  const [prevnext, setPrevNext] = useState(1);
  const [position, setPosition] = useState(0);

  function funcPrevNext() {
    const cellCount = 9;

    const angle = (prevnext / cellCount) * -360;

    setPrevNext(prevnext + 1);
    setPosition(angle);
  }

  return (
    <>
      <section id="home" className={ style.content }>
        <div className={ style.scene }>
          <div className={ style.carousel } style={ { transform: `translateZ(-100vw) rotateY(${position}deg)` } }>
            <div className={ style.panel }>1</div>
            <div className={ style.panel }>2</div>
            <div className={ style.panel }>3</div>
            <div className={ style.panel }>4</div>
            <div className={ style.panel }>5</div>
            <div className={ style.panel }>6</div>
            <div className={ style.panel }>7</div>
            <div className={ style.panel }>8</div>
            <div className={ style.panel }>9</div>
          </div>
        </div>
      </section>
      <button type="button" onClick={ funcPrevNext }>Next</button>
    </>
  );
};

export default Carousel;
