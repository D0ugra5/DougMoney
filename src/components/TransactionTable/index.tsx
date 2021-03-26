import { useContext } from "react";

import { TransactionContext } from "../../TransactionContext";
import { Container } from "./styles";

export function TransactionTable() {
const {transaction} = useContext(TransactionContext)
console.log(transaction)
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
        {transaction.map(transactions=>(
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
