import React from 'react';
import ReactDOM from 'react-dom';

import Formulario from './Formulario';

function App() {
  return (
    <section id='app'>
      <h1>Hello world</h1>
      <Formulario />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));