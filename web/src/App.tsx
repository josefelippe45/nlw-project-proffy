import React from 'react'; //JSX - JavaScript + XML
//import do estilo global
import './assets/styles/global.css';
//import das rotas
import Routes from './routes';

//o componente, assim como no react native, também pode ser criado assim: function App(){}. dessa outra forma
//trabalho usando ES6
const App = ()=> {
  return (
    <Routes />
  );
}

export default App;
