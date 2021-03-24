import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from '../../assets/close.svg'
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
     overlayClassName="react-modal-overlay"
     className="react-modal-content"
     >
         <button className='reactModalClose' type="button" onClick={onRequestClose}>
             <img src={closeImg} alt="Fechar Modal"/>
         </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Titulo" />

        <input placeholder="Valor" type="number" />
        <input placeholder="categoria"  />


        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
