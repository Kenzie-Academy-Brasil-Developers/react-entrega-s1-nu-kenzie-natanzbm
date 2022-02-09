import "./styles.css";
import { useState } from "react";
import TotalMoney from "../TotalMoney";

const Form = ({
  listTransactions,
  setListTransactions,
  filterTransactions,
}) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const [id, setId] = useState(1);

  const submit = () => {
    let obj = { id, description, type, value };

    obj.value = obj.type === "Saída" ? obj.value * -1 : Number(obj.value);

    setListTransactions([...listTransactions, obj]);
    setId(id + 1);
  };

  return (
    <section className="form__section">
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <div className="form__div1">
          <label className="form__label">Descrição</label>
          <input
            type="text"
            value={description}
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescription(event.target.value)}
          />
          <span className="form__example">Ex: Compra de roupas</span>
        </div>
        <div className="form__div2">
          <div className="form__div2--value">
            <label className="form__label">Valor</label>
            <input
              type="number"
              value={value}
              placeholder="1            R$"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
          <div className="form__div2--type">
            <label className="form__label">Tipo de valor</label>
            <select
              className="form__select"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </div>
        <button onClick={submit}>Inserir valor</button>
      </form>
      <>
        {listTransactions.length > 0 ? (
          <TotalMoney
            listTransactions={listTransactions}
            filterTransactions={filterTransactions}
          />
        ) : (
          <></>
        )}
      </>
    </section>
  );
};

export default Form;
