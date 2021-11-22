import React from 'react';
import style from './style.module.scss';

export type TCardExperienceProps = {
  year?: number;
  office: string;
  company: string;
  description: string;
}

const CardExperience = function CardExperience({
  year, office, company, description,
}: TCardExperienceProps) {
  return (
    <div className={ style.cexperience }>
      <span>{ year }</span>
      <div>
        <span>{ office }</span>
        <span>{ company }</span>
        <p>{ description }</p>
      </div>
    </div>
  );
};

export default CardExperience;
