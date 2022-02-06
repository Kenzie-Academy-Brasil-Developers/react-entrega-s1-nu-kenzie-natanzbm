import "./styles.css";
import logo from "../../img/NuKenzie.png";

const Header = ({ Render }) => {
  return (
    <header className="header">
      <div className="header__div">
        <img src={logo} alt="logo" />
        <button onClick={Render}>Início</button>
      </div>
    </header>
  );
};

export default Header;
