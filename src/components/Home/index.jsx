import Form from "../Form";
import Header from "../Header";
import List from "../List";
import "./styles.css";

const Home = ({
  Render,
  listTransactions,
  setListTransactions,
  filterTransactions,
  setFilterTransactions,
}) => {
  return (
    <>
      <header className="home__header">
        <Header Render={Render} />
      </header>
      <main className="home__main">
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          filterTransactions={filterTransactions}
          setFilterTransactions={setFilterTransactions}
        />
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </main>
    </>
  );
};

export default Home;
