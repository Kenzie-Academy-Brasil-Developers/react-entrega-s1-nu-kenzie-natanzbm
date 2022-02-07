import "./styles.css";

const TotalMoney = ({ listTransactions, filterTransactions }) => {
  return (
    <div className="total">
      <span>Valor total:</span>
      <span>
        {listTransactions
          .filter((value) => {
            return filterTransactions === "Todos"
              ? value.type !== filterTransactions
              : value.type === filterTransactions;
          })
          .reduce((acc, { value }) => {
            return Number(value) + acc;
          }, 0)
          .toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
      </span>
    </div>
  );
};

export default TotalMoney;
