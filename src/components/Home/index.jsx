import Form from "../Form";
import Header from "../Header";
import TotalMoney from "../TotalMoney";
import List from "../List";

const Home = ({ Render, listTransactions, setListTransactions }) => {
  return (
    <>
      <Header Render={Render} />
      <List
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
      <TotalMoney listTransactions={listTransactions} />
    </>
  );
};

export default Home;
