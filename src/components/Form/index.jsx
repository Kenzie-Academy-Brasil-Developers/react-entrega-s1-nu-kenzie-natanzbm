import "./styles.css";
import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const submit = () => {
    let obj = { description, type, value };
    setListTransactions([...listTransactions, obj]);
  };

  return (
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
  );
};

export default Form;
