import React from 'react';
import style from './style.module.scss';

type TCarouselProps = {
  position: number;
  children: any;
}

const Carousel = function Carousel({ position, children }: TCarouselProps) {
  // const [position, setPosition] = useState();
  return (
    <div className={ style.carousel }>
      <div className={ style.controller } style={ { transform: `translateX(${position}vw)` } }>
        { Array.isArray(children) ? children.map((element: any) => (
          <div className={ style.panel } key={ element.type.name }>
            { element }
          </div>
        )) : (
          <div className={ style.panel }>
            { children }
          </div>
        ) }
      </div>
    </div>
  );
};

export default Carousel;
