import Card from "../Card";
import "./styles.css";

const List = ({ listTransactions, setListTransactions }) => {
  return (
    <section className="TransactionsCard">
      <div className="Transactions__header">
        <span className="Transactions__header--span">Resumo financeiro</span>
        <span className="Transactions__header--buttons">
          <button>Todos</button>
          <button>Entradas</button>
          <button>Saídas</button>
        </span>
      </div>
      <ul className="TransactionsCard--list">
        {listTransactions.length > 0 ? (
          listTransactions.map((value, i) => (
            <Card transaction={value} key={i} />
          ))
        ) : (
          <span className="Transactions--render">
            Você ainda não possui nenhum lançamento
          </span>
        )}
      </ul>
    </section>
  );
};

export default List;
