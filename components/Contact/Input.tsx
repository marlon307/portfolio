import React from 'react';
import style from './style.module.scss';

export type TInputProps = {
  id: string;
  type: string;
  required?: boolean;
  name: string;
}

const Input = function Input({
  id, type, name, required = false,
}: TInputProps) {
  function isRquired() {
    if (required) {
      return (
        <div className={ style.placeholder }>
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
        />
        { isRquired() }
      </label>
    </div>
  );
};

export default Input;
