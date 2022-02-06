import { useState } from "react";
import LandingPage from "./components/LandingPage";
import "./App.css";
import Home from "./components/Home";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);

  const Render = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn ?
        <Home Render={Render} listTransactions={listTransactions} setListTransactions={setListTransactions} />
        :
        <LandingPage Render={Render} />}
    </div>
  );

}

export default App;
