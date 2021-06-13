import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App'


function Container(){
  return(
    <main>
      <h1>Reacrt To Do List</h1>
      <App/>
    </main>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Container/>
  </React.StrictMode>,
  document.getElementById('root')
);

