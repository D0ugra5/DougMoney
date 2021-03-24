import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
Modal.setAppElement("#root");
export function App() {
  const [isNewtransactionModalOpen, setisNewtransactionModalOpen] = useState(
    false
  );
  function handleOpenNewTransactionModal() {
    setisNewtransactionModalOpen(true);
  }

  function closeOpenNewTransactionModal() {
    setisNewtransactionModalOpen(false);
  }
  return (
    <>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewtransactionModalOpen}
        onRequestClose={closeOpenNewTransactionModal}
      ></NewTransactionModal>
      <GlobalStyle />
    </>
  );
}
