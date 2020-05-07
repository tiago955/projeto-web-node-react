// Componente do React sempre tem que ser com letra maiscula

import React from 'react';

import './global.css';

import Routes from './pages/routes';

  function App() {
  return (
    <Routes />
  );
    
}

export default App;

// JSX (JavaScript XML)
// quando o html está integrado dentro do arquivo javascript.js

// function App() {

  // const [counter, setCounter]  = useState(0);

  // useState = Array [função de atualização, atualiza o valor]

  // function increment () {
    // setCounter(counter +1);

 // }


//<div>
      //<Header>Semana Omnistack</Header>

      //<Header> Contador: {counter}</Header>
      //<button onClick={increment}> Incrementar</button>
      //</div>
     