import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import TodoList from './TodoList';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Login/>
    <TodoList/>
  </React.StrictMode>,
  document.getElementById('root')
); 

