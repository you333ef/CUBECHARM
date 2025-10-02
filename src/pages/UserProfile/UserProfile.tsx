import ADsAndVideos from "./UserProfileComponents/ADsAndVideos";
import PersonalData from "./UserProfileComponents/PersonalData";
import Stories from "./UserProfileComponents/Stories";


const UserProfile = () => {
  return (
<section aria-label="User profile" className="p-4 max-w-screen-xl mx-auto border-x border-gray-300">
 <PersonalData/>
 <Stories/>
 <ADsAndVideos/>
 </section>
  );
};
export default UserProfile;
