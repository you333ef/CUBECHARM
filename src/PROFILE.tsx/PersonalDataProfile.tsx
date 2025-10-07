import { RxDotsHorizontal } from "react-icons/rx";
import { FaAngleLeft, FaTimes } from "react-icons/fa";
import Button from "../components/Button";
import Image from "../components/Image";
import { profileData } from "../utils/stories";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Notifications from "../pages/UserProfile/Notifications/Notifications";


// Dummy data for modals
const dummyFollowers = [
  { id: 1, username: "sarah_jones", name: "Sarah Jones", avatar: "https://i.pravatar.cc/150?img=1", following: false },
  { id: 2, username: "mike_wilson", name: "Mike Wilson", avatar: "https://i.pravatar.cc/150?img=2", following: true },
  { id: 3, username: "emma_davis", name: "Emma Davis", avatar: "https://i.pravatar.cc/150?img=3", following: false },
];

const dummyFollowing = [
  { id: 4, username: "john_smith", name: "John Smith", avatar: "https://i.pravatar.cc/150?img=4", following: true },
  { id: 5, username: "lisa_anderson", name: "Lisa Anderson", avatar: "https://i.pravatar.cc/150?img=5", following: true },
  { id: 6, username: "david_lee", name: "David Lee", avatar: "https://i.pravatar.cc/150?img=6", following: true },
];

const PersonalDataProfile = () => {
  const [followersModal, setFollowersModal] = useState(false);
  const [followingModal, setFollowingModal] = useState(false);
  const [localFollowers, setLocalFollowers] = useState(dummyFollowers);
  const [localFollowing, setLocalFollowing] = useState(dummyFollowing);


  // Naviate To Profile Info
  const TOProfile=():void=>{
    navigate("/HomeList/ProfileE/ProfileInfo")

  }
  // To Update Profile
  const TOUpdateProfile=():void=>{
    navigate("/HomeList/ProfileE/UpdateProfile")

  }
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 md:px-0">
      <div className="flex flex-col max-w-3xl mx-auto md:mt-10">
        {/* Header */}
        <div className="flex items-center justify-between w-full mb-4 md:mb-6">
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Back"
            onClick={() => {
              if (window.history.length > 2) navigate(-1);
              else navigate("/default-home");
            }}
          >
            <FaAngleLeft size={24} />
          </button>

          <h1 className="text-xl md:text-2xl font-bold text-center flex-1 md:flex-none">
            {profileData.username}
          </h1>

          <div className="flex items-center justify-center">
            <Notifications />
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-around md:justify-between text-center py-4 md:py-6 border-y border-gray-100">
          <h4 className="text-gray-500 font-semibold text-sm md:text-base">
            <span className="font-bold text-black">{profileData.adsCount}</span> Ads
          </h4>

          <h4
            className="text-gray-500 font-semibold text-sm md:text-base cursor-pointer hover:text-black transition-colors"
            onClick={() => setFollowersModal(true)}
          >
            <span className="font-bold text-black">{profileData.followers}</span> Followers
          </h4>

          <h4
            className="text-gray-500 font-semibold text-sm md:text-base cursor-pointer hover:text-black transition-colors"
            onClick={() => setFollowingModal(true)}
          >
            <span className="font-bold text-black">{profileData.following}</span> Following
          </h4>
        </div>

        {/* Bio & Image Section  */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-10 gap-6 mt-6">
          <div className="text-center md:text-left space-y-2">
            <h6 className="font-bold text-lg">{profileData.name}</h6>
            <p className="text-gray-600 text-sm md:text-base">{profileData.bio}</p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={profileData.profilePic}
              alt="profile image"
              loading="lazy"
              className="rounded-3xl md:h-40 md:w-auto h-28 w-28 object-cover shadow-md"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start mt-6 gap-4">
          <Button
            name="Acc Inforamtion"
            onClick={TOProfile}
            className="bg-skyline-blue text-white capitalize py-1 px-5 rounded-lg"
          />
          <Button
            name="Update Profile"
            className="bg-gray-300 text-black capitalize py-1 px-5 rounded-lg"
            onClick={TOUpdateProfile}
          />
        </div>
      </div>

      {/* Followers Modal  */}
      {followersModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[90%] md:w-[450px] max-h-[500px] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-black">Followers</h2>
              <button onClick={() => setFollowersModal(false)}>
                <FaTimes size={22} className="text-black" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[420px] p-4">
              {localFollowers.map((user) => (
                <div key={user.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} alt={user.username} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-black">{user.username}</p>
                      <p className="text-sm text-gray-500">{user.name}</p>
                    </div>
                  </div>
                  <button
                  // Toggle follow/unfollow for this user

                    onClick={() =>
                      setLocalFollowers((prev) =>
                        prev.map((u) => (u.id === user.id ? { ...u, following: !u.following } : u))
                      )
                    }
                    className={`px-4 py-1.5 rounded-lg font-semibold text-sm ${
                      user.following ? "bg-gray-200 text-black" : "bg-blue-500 text-white"
                    }`}
                  >
                    {user.following ? "Following" : "Follow"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/*  Following Modal */}
      {followingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[90%] md:w-[450px] max-h-[500px] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-black">Following</h2>
              <button onClick={() => setFollowingModal(false)}>
                <FaTimes size={22} className="text-black" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[420px] p-4">
              {localFollowing.map((user) => (
                <div key={user.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} alt={user.username} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-black">{user.username}</p>
                      <p className="text-sm text-gray-500">{user.name}</p>
                    </div>
                  </div>
                  <button
                  // When the "Unfollow" button is clicked, remove  Yser 

                    onClick={() =>
                      setLocalFollowing((prev) => prev.filter((u) => u.id !== user.id))
                    }
                    className="px-4 py-1.5 rounded-lg font-semibold text-sm bg-gray-200 text-black hover:bg-gray-300"
                  >
                    Unfollow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PersonalDataProfile;
