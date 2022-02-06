import "./styles.css";

const Form = ({ listTransactions, setListTransactions }) => {
  return (
    <div className="form">
      <div className="form__div1">
        <span className="form__span">Descrição</span>
        <input type="text" placeholder="Digite aqui sua descrição" />
        <span className="form__example">Ex: Compra de roupas</span>
      </div>
      <div className="form__div2">
        <div className="form__div2--value">
          <span className="form__span">Valor</span>
          <input type="text" placeholder="1               R$" />
        </div>
        <div className="form__div2--type">
          <span className="form__span">Tipo de valor</span>
          <select></select>
        </div>
      </div>
      <button>Inserir valor</button>
    </div>
  );
};

export default Form;
