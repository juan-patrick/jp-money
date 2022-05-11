import ReactModal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

ReactModal.setAppElement('#root');

export function NewTransactionModal({
  isOpen, onRequestClose
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = { title, value, category, type };

    api.post('/transactions', data);
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>


      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
        <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))} />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            onClick={() => { setType('deposit') }}
            activeColor="green"
          >
            <img
              src={incomeImg}
              alt="Entrada"
            />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            onClick={() => { setType('withdraw') }}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />

        <button type="submit">
          Cadastrar
        </button>
      </Container >
    </ReactModal >
  )
}