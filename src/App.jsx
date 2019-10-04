import React from 'react';
import ReactDOM from 'react-dom';

import Formulario from './funcionalidades/Formulario';

const App = () => {
  return (
    <section id='app'>
      <Formulario />
    </section>
  );
;}

ReactDOM.render(<App />, document.getElementById('root'));