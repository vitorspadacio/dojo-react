import React, { useState } from 'react';

import InputDinheiro from '../componentes/InputDinheiro';
import InputTexto from '../componentes/InputTexto';
import Select from '../componentes/Select';

import './style.scss';

const produtoInicial = {
  nome: '',
  descricao: '',
  categoria: { id: 1, nome: 'Alimentício' },
  preco: 'R$ ',
  codigoBarras: 0,
};

const categorias = [
  { id: 1, nome: 'Alimentício' },
  { id: 2, nome: 'Higiene' },
  { id: 3, nome: 'Mesa e banho' },
];

export default () => {
  const [produto, setProduto] = useState(produtoInicial);
  const [produtos, setProdutos] = useState([]);

  const handleInputChange = (name, value) => setProduto({...produto, [name]: value});

  const handleSalvarClick = () => {
    setProdutos([...produtos, produto]);
    setProduto(produtoInicial);
  };

  return (
    <div id='formulario'>
      <h1>Formulário</h1>
      
      <InputTexto
        titulo='Nome'
        name='nome'
        value={produto.nome}
        onChange={handleInputChange}
      />

      <InputTexto
        titulo='Descrição'
        name='descricao'
        value={produto.descricao}
        onChange={handleInputChange}
      />

      <Select
        titulo='Categoria'
        name='categoria'
        selecionado={produto.categoria}
        itens={categorias}
        onChange={handleInputChange}
      />

      <InputDinheiro
        titulo='Preço'
        name='preco'
        value={produto.preco}
        onChange={handleInputChange}
      />

      <button type='button' onClick={handleSalvarClick}>Salvar produto</button>

      <ul>
        {produtos.map(function(produto, i) {
          return <li key={i}>{produto.nome}</li>
        })}
      </ul>
    </div>
  );
}