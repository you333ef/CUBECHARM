import { Outlet } from "react-router-dom"
import SupPalace from "./SupPalace"

const PalaceContainer = () => {
  return (
    <>
    <SupPalace/>
    <Outlet/>
    </>
  )
}

export default PalaceContainer