import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string
  
}

interface TransactionProviderProps {
  children: ReactNode
}

type TransactionsInput = Omit <Transaction,'id' | 'createdAt'>;


interface TransactioncontexData{
  transaction:Transaction[];
  createTransaction:(transaction:TransactionsInput) =>Promise<void>
}

export const TransactionContext = createContext<TransactioncontexData>(
  {} as TransactioncontexData
  )


export function TransactionProvider({ children }: TransactionProviderProps) {


  const [transaction, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api("transactions").then((reponse) => setTransactions(reponse.data.transactions));
  }, []);
async function createTransaction(transactionInput:TransactionsInput){

const reponse  =  await  api.post('/transactions', {
  ...transactionInput,
  createdAt:new Date(),
})
const { transactions} = reponse.data
setTransactions([
  ...transaction,
  transactions
])
}
  return (
        <TransactionContext.Provider value={{transaction,createTransaction}}>
      {children}
    </TransactionContext.Provider>
  )
}