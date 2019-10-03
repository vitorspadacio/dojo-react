import React, { useState } from 'react';

// Categoria (ver melhor)
// CodigoBarras
// Descrição
// Nome
// Preço

export default function Formulario() {
  // const [nome, setNome] = React.useState('produto');
  // const [descricao, setDescricao] = React.useState();
  // const [categoria, setCategoria] = React.useState();
  // const [preco, setPreco] = React.useState();

  const produtoInicial = {
    nome: '',
    descricao: '',
    categoria: '',
    preco: '',
    codigoBarras: 0,
  };

  const [produto, setProduto] = useState(produtoInicial);
  const [produtos, setProdutos] = useState([
    {
      nome: 'A',
      descricao: 'A',
      categoria: 'A',
      preco: 'A',
      codigoBarras: 0,
    }
  ]);

  const handleInputChange = function(event){
    const {target: {name, value} } = event;
    console.log(event.target.value)

    setProduto({...produto, [name]: value});
  };

  const handleEnviarClick = function() {
    setProdutos([...produtos, produto]);
    setProduto(produtoInicial);
  };

  return (
    <div>
      <h1>Formulário</h1>
      <label>Nome:
        <input type="text" name="nome" value={produto.nome} onChange={handleInputChange}></input>
      </label>
      <label>Descrição:
        <input type="text" name="descricao" value={produto.descricao} onChange={handleInputChange}></input>
      </label>
      <label>Categoria:
        <input type="text" name="categoria" value={produto.categoria} onChange={handleInputChange}></input>
      </label>
      <label>Preço:
        <input type="text" name="preco" value={produto.preco} onChange={handleInputChange}></input>
      </label>
      <label>Codigo de Barras:
        <img src="http://lorempixel.com/50/50/" ></img>
      </label>

      <button onClick={handleEnviarClick}>Enviar</button>

      <ul>
        {produtos.map(function(produto, i) {
          return <li key={i}>{produto.nome}</li>
        })}
      </ul>
    </div>
  );
}