import React from 'react';
import { mascararDinheiro } from '../infraestrutura/mascara';
import InputTexto from './InputTexto';

export default ({ titulo, name, value, onChange }) => {
  const handleChange = (name, value) => {
    const valorMascarado = mascararDinheiro(value);
    onChange(name, valorMascarado);
  };

  return (
    <InputTexto
      titulo={titulo}
      name={name}
      value={value}
      onChange={handleChange}
    />);
}
