import Card from "../Card";
import "./styles.css";

const List = ({
  listTransactions,
  setListTransactions,
  filterTransactions,
  setFilterTransactions,
}) => {
  const removeItem = (id) =>
    setListTransactions(listTransactions.filter((item) => item.id !== id));
  return (
    <section className="TransactionsCard">
      <div className="Transactions__header">
        <span className="Transactions__header--span">Resumo financeiro</span>
        <span className="Transactions__header--buttons">
          <button onClick={() => setFilterTransactions("Todos")} autoFocus>
            Todos
          </button>
          <button onClick={() => setFilterTransactions("Entrada")}>
            Entradas
          </button>
          <button onClick={() => setFilterTransactions("Saída")}>Saídas</button>
        </span>
      </div>
      <ul className="TransactionsCard--list">
        {listTransactions.length > 0 ? (
          listTransactions
            .filter((value) => {
              return filterTransactions === "Todos"
                ? value.type !== filterTransactions
                : value.type === filterTransactions;
            })
            .map((value, i) => (
              <Card transaction={value} key={i} removeItem={removeItem} />
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
