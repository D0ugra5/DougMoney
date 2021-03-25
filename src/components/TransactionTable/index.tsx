import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
interface Transaction{
  id:number;
  title:string;
  amount:number;
  type:string;
  category:string;
  createdAt:string
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
    useEffect(() => {
     api("transactions").then((reponse) => setTransactions(reponse.data.transactions));
      }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
        {transactions.map(transactions=>(
            <tr key={transactions.id}>
            <td className="Text-title">{transactions.title}</td>
            <td className={transactions.type}>
             {new Intl.NumberFormat('pt-bt',{
               style:'currency',
              currency:'BRL'

             }).format(transactions.amount)}
             </td>
            <td>{transactions.category}</td>
            <td>{new Intl.DateTimeFormat('pt-bt').format(
              new Date(transactions.createdAt)
            )}</td>
          </tr>
        ))}
      
       
       
        
        </tbody>
      </table>
    </Container>
  );
}
