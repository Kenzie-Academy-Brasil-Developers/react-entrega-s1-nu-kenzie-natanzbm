import { useState } from "react";
import LandingPage from "./components/LandingPage";
import "./App.css";
import Home from "./components/Home";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listTransactions, setListTransactions] = useState([
    // { description: "Salário recebido", type: "entrada", value: 3000 },
    // { description: "Conta de luz", type: "saída", value: -150 },
    // { description: "Condomínio", type: "saída", value: -100 },
    // { description: "Freelance", type: "entrada", value: 320 },
    // { description: "Compras mercado", type: "saída", value: 580 }
  ]);

  const Render = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn ?
        <Home Render={Render} />
        :
        <LandingPage Render={Render} />}
    </div>
  );

}

export default App;
