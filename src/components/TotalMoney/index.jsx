import "./styles.css";

const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="total">
      <span>Valor total:</span>
      <span>
        {listTransactions
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
