import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const PaymentContainer = () => {
  return (
    <>
   <Header/>
   <Outlet/>
    
    
    <Footer/>
    
    </>
  )
}

export default PaymentContainer