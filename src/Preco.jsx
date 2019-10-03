import React from 'react';
export default function ({ preco, onChange }) {
  const removerCaracteresNaoNumericos = function(value) {
    return (value ? value.replace(/[^0-9]/g, '') : '');
  }

  const mask = function(value) {
    let valueAtualizado = removerCaracteresNaoNumericos(value);

    if (valueAtualizado.length >= 2) {
      valueAtualizado = `${valueAtualizado.substring(valueAtualizado.length - 2, 0)},${valueAtualizado.substring(valueAtualizado.length, valueAtualizado.length - 2)}`;
    }

    const casasIniciais = 6;
    const adicionarPontoACadaCasas = 4;
    for (
      let contador = casasIniciais;
      valueAtualizado.length > contador;
      contador += adicionarPontoACadaCasas) {
      valueAtualizado = `${valueAtualizado.substring(valueAtualizado.length - contador, 0)}`
        + `.${valueAtualizado.substring(valueAtualizado.length, valueAtualizado.length - contador)}`;
    }

    return `R$ ${valueAtualizado}`;
  }
  const enviar = (value) => {
    const maskedValue = mask(value);
    onChange(maskedValue);
  }
  
  return (
    <label>Preço
      <input type="text" name="preco" value={preco} onChange={e => enviar(e.target.value)}></input>
    </label>
  )

}