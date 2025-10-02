import { RxDotsHorizontal } from "react-icons/rx";
import { FaAngleLeft, FaTimes } from "react-icons/fa";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import { profileData } from "../../../utils/stories";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PersonalData = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
  <section >


      <div className="flex max-w-3xl mx-auto  items-center  md:mt-10">
        <div>
          <div className="flex  gap-10 justify-between  items-center">
              <span className="sr-only">go back</span>
              <FaAngleLeft  className="md:hidden block" size={30}
               aria-label="Back"
               role="button"
                 onClick={() => {
    if (window.history.length > 2) navigate(-1);
    else navigate("/default-home"); // fallback route
  }}
              />
            <h1 className="text-2xl font-bold">{profileData.username}</h1>
            <span className="sr-only">menu</span>
             <RxDotsHorizontal size={30}
             onClick={()=>setIsModalOpen(true)}
             aria-label="menu"
              role="button"
             />
    
          </div>
          <div className="flex gap-10 md:pt-5 md:pb-0 py-5 capitalize text-center">
            
            <h4 className="text-gray-400 font-semibold">
              <span className="font-bold text-black">{profileData.adsCount}</span> Ads
            </h4>
            <h4 className="text-gray-400 font-semibold">
              <span className="font-bold  text-black">{profileData.followers}</span> followers
            </h4>
            <h4 className="text-gray-400 font-semibold">
              <span className="font-bold  text-black">{profileData.following}</span> following
            </h4>

          </div>
<div className="flex items-center md:gap-20 gap-8">
       <div className="bio">
        <h6 className="font-bold">{profileData.name}</h6>
           <p>
            {profileData.bio}
          </p>
         

     </div>
             <Image
          src={profileData.profilePic}
          alt="profile image"
          loading="lazy"
          className="rounded-3xl md:h-40 md:w-auto h-28 w-28 object-cover"
        />
</div>
                <div className="md:mt-0 mt-5 flex justify-center md:justify-start">
              <Button name="follow" className="bg-skyline-blue text-white capitalize py-1 px-5 rounded-lg me-5"/>
            <Button name="message" className="bg-gray-300 text-black ml- capitalize py-1 px-5 rounded-lg" onClick={() => navigate("/chat/messages/1")}/>
          </div>
        </div>
     
      </div>
         {/* The Modal */}
  
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          >
            <button onClick={()=> setIsModalOpen(false)} className="absolute top-4 right-4 text-white">
              <FaTimes size={30} />
            </button>
            
  
  <div className="bg-white rounded-2xl  md:w-[500px] w-[90%] md:h-[350px] flex justify-center items-center">
  <div className="flex flex-col w-full space-y-0"> {/* remove vertical gaps to keep borders clean */ }
    <button className="w-full  border-b border-gray-200 text-red-500 font-bold py-3 bg-white hover:bg-gray-50">
      Block
    </button>
    <button className="w-full border-b border-gray-200 text-red-500 font-bold py-3 bg-white hover:bg-gray-50">
      Report
    </button>
    <button className="w-full  border-gray-200 text-black font-bold py-3 bg-white hover:bg-gray-50">
      Share to
    </button>
  </div>
</div>
</div>
               
     
            
        )}
    </section>
  )
}

export default PersonalData
