import React, { useState } from 'react';

import InputTexto from '../InputTexto';
import ListaCategoria from './ListaCategoria';
import Preco from './Preco';

import './style.scss';

const produtoInicial = {
  nome: '',
  descricao: '',
  categoria: '',
  preco: '',
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

  const handleInputChange = (event) => {
    const {target: {name, value} } = event;
    setProduto({...produto, [name]: value});
  };

  const handleEnviarClick = function() {
    setProdutos([...produtos, produto]);
    setProduto(produtoInicial);
  };

  const handlePrecoChange = (value) => {
    setProduto({...produto, preco: value});
  };


  return (
    <div id='formulario'>
      <h1>Formulário</h1>
      
      <InputTexto name="nome" value={produto.nome} onChange={handleInputChange} />
      <InputTexto name="descricao" value={produto.descricao} onChange={handleInputChange} />

      <ListaCategoria categorias={categorias} />
      
      <Preco preco={produto.preco} onChange={handlePrecoChange}/>

      <ul>
        {produtos.map(function(produto, i) {
          return <li key={i}>{produto.nome}</li>
        })}
      </ul>
    </div>
  );
}