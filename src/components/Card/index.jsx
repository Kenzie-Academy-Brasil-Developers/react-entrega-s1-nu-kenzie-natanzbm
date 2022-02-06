import { FaTrash } from "react-icons/fa";
import "./styles.css";

const Card = ({ transaction, removeItem }) => {
  return (
    <>
      <li
        className={
          transaction.type === "Entrada" ? "CardList entrada" : "CardList saida"
        }
      >
        <div className="CardList--div1">
          <span className="span__description">{transaction.description}</span>
          <span className="span__type">{transaction.type}</span>
        </div>
        <div className="CardList--div2">
          <span className="span__value">
            {Number(transaction.value).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button
            onClick={() => removeItem(transaction.id)}
            className="CardButton"
          >
            <FaTrash />
          </button>
        </div>
      </li>
    </>
  );
};

export default Card;
