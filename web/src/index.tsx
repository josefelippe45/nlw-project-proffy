import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//primeiro arquivo que o react carrega. Renderiza a interface a partir do javascript.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //expemplo: procura no documento html o elemento com id igual a root, dentro deste elemento ele roda o código acima
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

