import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyList from "../components/PropertyList";
import CategoryBar from "../components/CategoryBar";

const Home = () => {
  return (
    <>
      <Header />
      <CategoryBar />
      <PropertyList />
      <Footer />
    </>
  );
};

export default Home;
