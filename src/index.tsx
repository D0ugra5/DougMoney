import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from "miragejs";
  import {App} from './App';

createServer({
  models:{
    transactions:Model
  },
  seeds(server){
    server.db.loadData({
      transactions:[
        {
        id:1,
        title:'Venda de cocaina ',
        type:'Entrada',
        category:'trafico',
        amount: 500,
        createdAt: new Date('2021-02-12 09:00:00'),
      },
      {
        id:2,
        title:'Venda de Crack ',
        type:'Saida',
        category:'trafico',
        amount: 7000,
        createdAt:new Date('2021-02-12 09:00:00'),
      },
      {
        id:3,
        title:'Venda de Maconha ',
        type:'Entrada',
        category:'trafico',
        amount: 1100,
        createdAt:new Date('2021-02-12 09:00:00'),
      }
    ],
    })
  },
  routes(){
    this.namespace='api';

    this.get('/transactions',()=>{
      return this.schema.all('transactions')
   
    })

    this.post('/transactions',(scheme,request)=>{
      const data = JSON.parse(request.requestBody)
      return this.schema.create('transactions',data)
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

