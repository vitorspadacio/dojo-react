import React from 'react';

export default function ({ titulo, name, selecionado, itens, onChange }) {
  const mapearItens = () => itens.map(item => <option key={item.id} value={item.id}>{item.nome}</option>);

  return (
    <label>
      <span>{titulo}: </span>
      <select
        name={name}
        value={selecionado.id}
        onChange={e => onChange(e.target.name, e.target.value)}>
        {mapearItens()}
      </select>
    </label>
  );
}