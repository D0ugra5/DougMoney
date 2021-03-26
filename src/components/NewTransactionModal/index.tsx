import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg'
import Entrada from '../../assets/Entradas.svg'
import Saidas from '../../assets/Saidas.svg'
import { FormEvent, useState, useContext } from "react";
import { api } from "../../services/api";
import { TransactionContext } from "../../TransactionContext";



interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {


     const{createTransaction} = useContext(TransactionContext)
   
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setcategory] = useState('')
  const [type, setType] = useState('Entrada')

  async function handleCreateNEwTransaction(event: FormEvent) {
    event.preventDefault();
 await createTransaction({
   title,
   amount,
   category,
   type,
 })
 setTitle('');
 setAmount(0);
setType('Entrada');
setcategory('')

 onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className='reactModalClose' type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNEwTransaction}>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)} />

        <input placeholder="Valor" type="number" value={amount} onChange={event => setAmount(Number(event.target.value))} />
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => { setType('Entrada') }}
            isActive={type === 'Entrada'}
            activeColor="green"
          >
            <img src={Entrada} alt="entradas" />
            <span>Entradas</span>
          </RadioBox>
          <RadioBox
            activeColor="red"

            type='button'
            isActive={type === 'withdraw'}
            onClick={() => { setType('Saida') }}>
            <img src={Saidas} alt="Saida" />
            <span>Saidas</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="categoria" value={category} onChange={event => setcategory(event.target.value)} />


        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
