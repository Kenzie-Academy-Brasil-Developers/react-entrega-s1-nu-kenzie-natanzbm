import logo from "../../img/NuKenzie.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__div">
        <img src={logo} alt="logo" />
        <button>Início</button>
      </div>
    </header>
  );
};

export default Header;
