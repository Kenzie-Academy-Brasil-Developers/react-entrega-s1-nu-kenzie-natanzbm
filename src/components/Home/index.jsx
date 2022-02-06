import Form from "../Form";
import Header from "../Header";
import TotalMoney from "../TotalMoney";

const Home = ({ Render }) => {
  return (
    <>
      <Header Render={Render} />
      <Form />
      <TotalMoney />
    </>
  );
};

export default Home;
