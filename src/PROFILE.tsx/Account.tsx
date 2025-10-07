import ADsAnd_Videos from "../pages/UserProfile/ADS_Vid_Acc"
import StoriesAcc from "../pages/UserProfile/StoriesAcc"
import PersonalDataProfile from "./PersonalDataProfile"

const Account = () => {
  return (
    <>
    


    <section aria-label="User profile" className="p-4 max-w-screen-xl mx-auto border-x border-gray-300">
 <PersonalDataProfile/>
 <StoriesAcc/>
 <ADsAnd_Videos/>
 </section>
{/* 


 <ADsAndVideos/>
*/}
    </>
  )
}
export default Account