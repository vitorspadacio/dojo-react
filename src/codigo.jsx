import React from 'react';
import ReactDOM from 'react-dom';

function Clock() {
  const [nome, setNome] = React.useState('Teste');
  const [data, setData] = React.useState(new Date());

  const handleAlterarNomeClick = function() {
    const novoNome = nome === 'Teste' ? 'Mickael Jackson' : 'Teste';
    setNome(novoNome);
  }

  const handleClick = function() {
    setData(new Date());
  }

  React.useEffect(function() {
    console.log('Renderizou!');
    
    return function() {
      console.log('Desrenderizou!');
    }
  }, []);

  return (<React.Fragment>
    <span>{nome}</span>
    <button onClick={() => handleAlterarNomeClick()}>Alterar nome</button>
    <button onClick={() => handleClick()}>Atualizar data</button>
    <span>{data.toLocaleTimeString()}</span>
  </React.Fragment>);
}

function App() {
  const [abrirRelogio, setAbrirRelogio] = React.useState(false);

  const handleClick = function() {
    setAbrirRelogio(!abrirRelogio);
  }

  return (
    <section>
      <button onClick={handleClick}>Abre/fecha relógio</button>
      { abrirRelogio ? <Clock /> : <span>Relógio fechado</span> }
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
