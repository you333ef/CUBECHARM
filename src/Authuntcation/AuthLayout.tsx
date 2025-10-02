import { Outlet } from "react-router-dom"
import Left_Auth from "./Left_Auth"


const AuthLayout = () => {
  return (
    <div className="w-full flex flex-wrap" >
        <div className=" hidden lg:block lg:w-1/2 bg-red-300"><Left_Auth/></div>
        <div className="w-full  lg:w-1/2 min-h-screen overflow-auto"><Outlet/></div>
    </div>
  )
}
export default AuthLayout