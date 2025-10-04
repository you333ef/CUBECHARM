import React from 'react'
import SupResorts from './SupResorts'
import { Outlet } from 'react-router-dom'

const RESORTSCONTAINER = () => {
  return (
    <div>
        <SupResorts/>
        <Outlet/>
    </div>
  )
}

export default RESORTSCONTAINER