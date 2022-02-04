import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import "./App.css";
import "./components/LandingPage/styles.css";
import "./components/Header/styles.css";
import "./components/Form/styles.css";
import "./components/TotalMoney/styles.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listTransactions, setListTransactions] = useState([
    // { description: "Salário recebido", type: "entrada", value: 3000 },
    // { description: "Conta de luz", type: "saída", value: -150 },
    // { description: "Condomínio", type: "saída", value: -100 },
    // { description: "Freelance", type: "entrada", value: 320 },
    // { description: "Compras mercado", type: "saída", value: 580 }
  ]);

  const Enter = () => setIsLoggedIn(true);

  const Return = () => setIsLoggedIn(false);

  return (
    <div className="App">
      {isLoggedIn === true ?
        <>
          <Header Return={Return} />
          <Form />
          <TotalMoney />
        </>
        :
        <LandingPage Enter={Enter} />}
    </div>
  );

}

export default App;
