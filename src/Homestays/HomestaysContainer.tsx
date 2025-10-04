import React from 'react'
import SupHomestays from './SupHomestays'
import { Outlet } from 'react-router-dom'

const HomestaysContainer = () => {
  return (
    <div>
<SupHomestays/>
<Outlet/>

    </div>
  )
}

export default HomestaysContainer