import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg'
import Entrada from '../../assets/Entradas.svg'
import Saidas from '../../assets/Saidas.svg'
import { FormEvent, useState } from "react";
import { api } from "../../services/api";



interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
 const [title,setTitle] = useState('')
 const [value,setvalue] = useState(0)
 const [category,setcategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNEwTransaction(event: FormEvent) {
    event.preventDefault();
  const data = {title,value,category}
  api.post('/transactions',data)
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
        <input placeholder="Titulo"  value={title} onChange={event => setTitle(event.target.value)}/>

        <input placeholder="Valor" type="number" value={value} onChange={event => setvalue(Number(event.target.value))} />
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={Entrada} alt="entradas" />
            <span>Entradas</span>
          </RadioBox>
          <RadioBox
            activeColor="red"

            type='button'
            isActive={type === 'withdraw'}
            onClick={() => { setType('withdraw') }}>
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
