import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Header />
     
      
      <Outlet/>
    
      <Footer />
    </>
  );
};

export default Home;
