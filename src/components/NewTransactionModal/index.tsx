import ReactModal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


ReactModal.setAppElement('#root');

export function NewTransactionModal({
  isOpen, onRequestClose
}: NewTransactionModalProps) {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar Transação</h2>
    </ReactModal>
  )
}