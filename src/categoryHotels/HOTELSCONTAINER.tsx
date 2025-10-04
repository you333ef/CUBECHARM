
import SupHotels from './supHotels'
import { Outlet } from 'react-router-dom'

const HOTELSCONTAINER = () => {
  return (
    <div>
        <SupHotels/>
        <Outlet/>

    </div>
  )
}

export default HOTELSCONTAINER