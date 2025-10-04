import { Outlet } from "react-router-dom"
import SupChalets from "./SupChalets"

const ChaletContainer = () => {
  return (
    <div>
       
        <SupChalets/>
         <Outlet/>
    </div>
  )
}

export default ChaletContainer