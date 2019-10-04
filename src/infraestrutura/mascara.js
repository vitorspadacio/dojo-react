export const removerCaracteresNaoNumericos = (value) => (value ? value.replace(/[^0-9]/g, '') : '');

export const mascararDinheiro = (value) => {
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
};