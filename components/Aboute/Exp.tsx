import React from 'react';
import style from './style.module.scss';

export type TExpProps = {
  year?: number;
  office: string;
  institution: string;
  info: string | React.ReactElement;
}

const Exp = function Exp({
  year, office, institution, info,
}: TExpProps) {
  return (
    <div className={ style.cont }>
      <div className={ style.pl }>
        <span>{ year }</span>
      </div>
      <div className={ style.sl }>
        <h3>{ office }</h3>
        <span>{ institution }</span>
      </div>
      <span className={ style.info }>
        { info }
      </span>
    </div>
  );
};

Exp.defaultProps = {
  year: undefined,
};

export default Exp;
