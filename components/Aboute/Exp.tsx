import React from 'react';
import style from './style.module.scss';

export type TExpProps = {
  year?: number;
  office: string;
  institution: string;
}

const Exp = function Exp({ year, office, institution }: TExpProps) {
  return (
    <div className={ style.cont }>
      <div className={ style.pl }>
        <span>{ year }</span>
      </div>
      <div className={ style.sl }>
        <h3>{ office }</h3>
        <span>{ institution }</span>
      </div>
    </div>
  );
};

export default Exp;
