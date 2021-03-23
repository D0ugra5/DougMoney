import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from "miragejs";
  import {App} from './App';

createServer({
  routes(){
    this.namespace='api';

    this.get('/transaction',()=>{
      return[
        {
          id:1,
          title:'transaction 1 ',
          amount:400,
          type:'deposit',
          category:'Food',
        }
      ]
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

