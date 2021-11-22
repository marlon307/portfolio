import React from 'react';
import style from './style.module.scss';

type TCircleCardProps = {
  svg: any;
  title: string;
  color: string
}

const CircleCard = function CircleCard({ svg, title, color }: TCircleCardProps) {
  return (
    <div
      className={ style.circlecard }
      style={ { background: color } }
      title={ title }
    >
      { svg }
    </div>
  );
};

export default CircleCard;
