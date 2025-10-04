import { Outlet } from "react-router-dom"
import SupVillage from "./SupVillage"


const VillageContainer = () => {
  return (
    <>
    <SupVillage/>
    <Outlet/>

    </>
  )
}

export default VillageContainer