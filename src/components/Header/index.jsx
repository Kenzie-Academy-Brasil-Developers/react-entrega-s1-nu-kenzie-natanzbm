import logo from "../../img/NuKenzie.png";

const Header = ({ Return }) => {
  return (
    <header className="header">
      <div className="header__div">
        <img src={logo} alt="logo" />
        <button onClick={Return}>Início</button>
      </div>
    </header>
  );
};

export default Header;
