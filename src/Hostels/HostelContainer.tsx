import React from 'react'
import { Outlet } from 'react-router-dom'
import SupHostels from './SupHostels'

const HostelContainer = () => {
  return (
    <div>
        <SupHostels/>
        <Outlet/>
    </div>
  )
}

export default HostelContainer