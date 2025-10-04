import { Outlet } from "react-router-dom"
import SupHouses from "./SupHouses"
import Header from "../components/Header"
import Footer from "../components/Footer"


const HousesContainer = () => {
  return (
    <div>
      
        <SupHouses />
        <Outlet/>
       
       

    </div>
  )
}

export default HousesContainer