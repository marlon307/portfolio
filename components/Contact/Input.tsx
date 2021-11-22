import React, { ChangeEvent } from 'react';
import style from './style.module.scss';

export type TInputProps = {
  id: string;
  type: string;
  required?: boolean;
  name: string;
  eventchange: Function;
  value: string;
}

const Input = function Input({
  id, type, name, required, eventchange, value,
}: TInputProps) {
  function isRquired() {
    if (required) {
      return (
        <div>
          <span>{ id }</span>
          { ' ' }
          <span>*</span>
        </div>
      );
    }
    return id;
  }

  return (
    <div className={ style.input }>
      <label htmlFor={ id }>
        <input
          id={ id }
          type={ type }
          placeholder={ id }
          name={ name }
          required={ required }
          onChange={ (event: ChangeEvent<HTMLInputElement>) => eventchange(event) }
          value={ value }
        />
        { isRquired() }
      </label>
    </div>
  );
};

export default Input;
