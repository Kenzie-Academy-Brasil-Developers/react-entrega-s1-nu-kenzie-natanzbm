import "./styles.css";
import landing from "../../img/Group277.svg";
import logo from "../../img/NuKenzieWhite.png";

const LandingPage = ({ Render }) => {
  return (
    <div className="landing">
      <div className="landing__main">
        <img src={logo} alt="logo" />
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <button onClick={Render}>Iniciar</button>
      </div>
      <div className="svg">
        <img src={landing} alt="example" />
      </div>
    </div>
  );
};

export default LandingPage;
