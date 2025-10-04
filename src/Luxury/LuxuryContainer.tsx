import React from 'react'
import { Outlet } from 'react-router-dom'
import SupLuxury from './SupLuxury'

const LuxuryContainer = () => {
  return (
    <div>
        <SupLuxury/>
        <Outlet/>
    </div>
  )
}

export default LuxuryContainer