import React from 'react';
import cx from 'classnames';
import style from './style.module.scss';

type TCircleCard = {
  size: number
  svg: any;
  title: string;
}

const CircleCard = function CircleCard({ size, svg, title }: TCircleCard) {
  return (
    <div className={ cx(style.circlecard, {
      [style.c1]: size === 1,
      [style.c2]: size === 2,
      [style.c3]: size === 3,
    }) }
    >
      <figure>
        { svg }
      </figure>
      <span>{ title }</span>
    </div>
  );
};

export default CircleCard;
