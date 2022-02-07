import Form from "../Form";
import Header from "../Header";
import TotalMoney from "../TotalMoney";
import List from "../List";

const Home = ({
  Render,
  listTransactions,
  setListTransactions,
  filterTransactions,
  setFilterTransactions,
}) => {
  return (
    <>
      <Header Render={Render} />
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
      {listTransactions.length > 0 ? (
        <TotalMoney
          listTransactions={listTransactions}
          filterTransactions={filterTransactions}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
