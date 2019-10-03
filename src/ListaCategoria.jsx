import React from 'react';

export default function (props) {
  const mapearCategorias = () =>
    props.categorias.map(categoria =>
      <option key={categoria.id}>{categoria.nome}</option>);

  return (
    <label>Categoria
      <select>
        <option>Escolha</option>
        {mapearCategorias()}
      </select>
    </label>
  );
}