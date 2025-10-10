import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Pages
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";
import Property from "./pages/Property";
import CreateAd from "./pages/CreateAd";
import ProMode from "./pages/ProMode";
import MyAds from "./pages/MyAds";
import MyFavorites from "./pages/MyFavorites";
import Settings from "./pages/Settings";
import UserProfile from "./pages/UserProfile/UserProfile";
import Dashboard from "./pages/admin/Dashboard";

// Auth
import AuthLayout from "./Authuntcation/AuthLayout";
import Login from "./Authuntcation/Login";
import Register from "./Authuntcation/Register";
import Forget from "./Authuntcation/Forget";
import Reset from "./Authuntcation/Reset";
import Verifi from "./Authuntcation/Verifi";
import ChangePass from "./Authuntcation/ChangePass";

// Components
import ChatConversation from "./components/ChatConversation";
import PropertyList from "./components/PropertyList";

// Categories
import Resorts from "./categories/Resorts";
import Apartments from "./categories/Apartments";
import Hotels from "./categories/Hotels";

// Hotels subcategories
import Airport from "./categoryHotels/Airport";
import Luxury from "./categoryHotels/Luxury";
import Budget from "./categoryHotels/Budget";
import City from "./categoryHotels/City";
import Family from "./categoryHotels/Family";
import Business from "./categoryHotels/Business";
import Heritage from "./categoryHotels/Heritage";
import Wellness from "./categoryHotels/Wellness";
import Conference from "./categoryHotels/Conference";

// Resorts subcategories
import Beach from "./categoryResorts/Beach";
import Mountain from "./categoryResorts/Mountain";
import Desert from "./categoryResorts/Desert";
import Spa from "./categoryResorts/Spa";
import Sports from "./categoryResorts/Sports";
import Eco from "./categoryResorts/Eco";
import Wedding from "./categoryResorts/Wedding";
import LuxuryAll from "./categoryResorts/LuxuryAll";
import Cultural from "./categoryResorts/Cultural";

// Apartments subcategories
import Aparthotel from "./Apartments/Aparthotel";
import Vacation from "./Apartments/Vacation";
import Executive from "./Apartments/Executive";
import Studio from "./Apartments/Studio";
import Furnished from "./Apartments/Furnished";
import Coliving from "./Apartments/Coliving";
import Student from "./Apartments/Student";

// Houses
import HousesContainer from "./Housesz/HousesContainer";
import PrivateHomes from "./Housesz/PrivateHomes";
import FamilyHouse from "./Housesz/FamilyHouse";
import IndependentVilla from "./Housesz/IndependentVilla";
import LuxuryPalace from "./Housesz/LuxuryPalace";
import CountryCottage from "./Housesz/CountryCottage";
import MountainChalet from "./Housesz/MountainChalet";
import HeritageHouse from "./Housesz/HeritageHouse";
import SmartHome from "./Housesz/SmartHome";
import EcoHouse from "./Housesz/EcoHouse";
import Homestay from "./Housesz/Homestay";
import VillageContainer from "./VillageFolde/VillageContainer";
import Independent from "./VillageFolde/Independent";
import Beachfront from "./VillageFolde/Beachfront";
import Countryside from "./VillageFolde/Countryside";
import Island from "./VillageFolde/Island";
import ButlerService from "./VillageFolde/ButlerService";
import EcoFriendly from "./VillageFolde/EcoFriendly";
import Smart from "./VillageFolde/Smart";
import Resort from "./VillageFolde/Resort";
import PalaceContainer from "./Palaces/PalaceContainer";
import RoyalPalace from "./Palaces/RoyalPalace";
import HistoricPalace from "./Palaces/HistoricPalace";
import GlassPalace from "./Palaces/GlassPalace";
import DesertPalace from "./Palaces/DesertPalace";
import MountainPalace from "./Palaces/MountainPalace";
import BeachPalace from "./Palaces/BeachPalace";
import FloatingPalace from "./Palaces/FloatingPalace";
import SmartPalace from "./Palaces/SmartPalace";
import PrivateEstatePalace from "./Palaces/PrivateEstatePalace";
import ChaletContainer from "./Chalets/ChaletContainer";
import Alpine from "./Chalets/Alpine";
import Forest from "./Chalets/Forest";
import Lakeview from "./Chalets/Lakeview";
import Wooden from "./Chalets/Wooden";
import HostelContainer from "./Hostels/HostelContainer";
import Hostel from "./Hostels/Hostel";
import GuestHouse from "./Hostels/GuestHouse";
import Dormitory from "./Hostels/Dormitory";
import YouthHostel from "./Hostels/YouthHostel";
import Monastery from "./Hostels/Monastery";
import StudentHousing from "./Hostels/StudentHousing";
import SharedRoom from "./Hostels/SharedRoom";
import Couchsurfing from "./Hostels/Couchsurfing";
import CulturalStay from "./Hostels/CulturalStay";
import TemporaryHousing from "./Hostels/TemporaryHousing";
import HomestaysContainer from "./Homestays/HomestaysContainer";
import BeachHouse from "./Homestays/BeachHouse";
import EcoFriendlyHouse from "./Homestays/EcoFriendlyHouse";
import LuxuryVilla from "./Homestays/LuxuryVilla";
import LuxuryContainer from "./Luxury/LuxuryContainer";
import LuxuryVillaa from "./Luxury/LuxuryVilla";
import LuxuryPalacezzz from "./Luxury/LuxuryPalace";
import LuxuryChalet from "./Luxury/LuxuryChalet";
import PrivateIslandVilla from "./Luxury/PrivateIslandVilla";
import LuxuryPenthouse from "./Luxury/LuxuryPenthouse";
import UnderwaterHouse from "./Luxury/UnderwaterHouse";
import GlassDesertHouse from "./Luxury/GlassDesertHouse";
import LuxuryCastle from "./Luxury/LuxuryCastle";
// APARTMENTS
import LUX from "./Apartments/Luxury";
import Budgett from "./Apartments/Budget";
import Familyy from "./Apartments/Family";
import HOTELSCONTAINER from "./categoryHotels/HOTELSCONTAINER";
import RESORTSCONTAINER from "./categoryResorts/RESORTSCONTAINER";
import ProfileInfo from "./PROFILE.tsx/ProfileInfo";
import UpdateProfile from "./PROFILE.tsx/UpdateProfile";
import ProfileContainer from "./PROFILE.tsx/ProfileContainer";
import Account from "./PROFILE.tsx/Account";
import { Toaster } from "sonner";
import Contact from "./PROFILE.tsx/Contact";
import About from "./PROFILE.tsx/About";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import PaymentContainer from "./Payment/PaymentContainer";
import Pay_FirstStep from "./Payment/Pay_FirstStep";
import Pay_SecondStep from "./Payment/Pay_SecondStep";
import Completed from "./Payment/Completed";
function App() {
  return (
    <BrowserRouter>
       <Toaster richColors position="top-right" />
      <Routes>
        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/HomeList" />} />

        {/* Public Pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Privacy" element={<Privacy />} />
         <Route path="/Help" element={<Help />} />
           <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About/>} />
          
        <Route path="*" element={<NotFound />} />

        {/* Dashboard & Chat */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/messages/:id" element={<ChatConversation />} />

        {/* Property & Ads */}
        <Route path="/property/:id" element={<Property />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/pro-mode" element={<ProMode />} />

        {/* Account */}
        <Route path="/account/my-ads" element={<MyAds />} />
        <Route path="/account/my-favorites" element={<MyFavorites />} />
        <Route path="/account/settings" element={<Settings />} />
        <Route path="/account/user-profile" element={<UserProfile />} />

        {/* Authentication Layout */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget" element={<Forget />} />
          <Route path="reset" element={<Reset />} />
          <Route path="verify" element={<Verifi />} />
          <Route path="ChangePass" element={<ChangePass />} />
        </Route>

        {/* Main Home Layout with Header/Footer */}
        <Route path="HomeList" element={<Home />}>
          {/* Default Page inside Home */}
          <Route index element={<PropertyList />} />

          {/* Resorts */}
          <Route path="RESORTSCONTAINER" element={<RESORTSCONTAINER />}>
            <Route path="Beach" element={<Beach />} />
            <Route path="Mountain" element={<Mountain />} />
            <Route path="Desert" element={<Desert />} />
            <Route path="Spa" element={<Spa />} />
            <Route path="Sports" element={<Sports />} />
            <Route path="Eco" element={<Eco />} />
            <Route path="Wedding" element={<Wedding />} />
            <Route path="LuxuryAll" element={<LuxuryAll />} />
            <Route path="Cultural" element={<Cultural />} />
          </Route>

          {/* Apartments */}
          <Route path="Apartments" element={<Apartments />}>
            <Route path="Aparthotel" element={<Aparthotel />} />
            <Route path="Vacation" element={<Vacation />} />
            <Route path="Executive" element={<Executive />} />
            <Route path="Studio" element={<Studio />} />
            <Route path="Furnished" element={<Furnished />} />
            <Route path="Coliving" element={<Coliving />} />
            <Route path="Student" element={<Student />} />
             <Route path="LUX" element={<LUX />} />
             <Route path="Budget" element={<Budgett />} />

              <Route path="Family" element={<Familyy />} />
             
          </Route>

          {/* Houses */}
          <Route path="Housesz" element={<HousesContainer />}>
            <Route path="PrivateHomes" element={<PrivateHomes />} />
            <Route path="FamilyHouse" element={<FamilyHouse />} />
            <Route path="IndependentVilla" element={<IndependentVilla />} />
            <Route path="LuxuryPalace" element={<LuxuryPalace />} />
            <Route path="CountryCottage" element={<CountryCottage />} />
            <Route path="MountainChalet" element={<MountainChalet />} />
            <Route path="HeritageHouse" element={<HeritageHouse />} />
            <Route path="SmartHome" element={<SmartHome />} />
            <Route path="EcoHouse" element={<EcoHouse />} />
            <Route path="Homestay" element={<Homestay />} />
          </Route>
          {/* Hotels */}
          <Route path="HOTELSCONTAINER" element={<HOTELSCONTAINER />}>
            <Route path="Airport" element={<Airport />} />
            <Route path="Luxury" element={<Luxury />} />
            <Route path="Budget" element={<Budget />} />
            <Route path="City" element={<City />} />
            <Route path="Family" element={<Family />} />
            <Route path="Business" element={<Business />} />
            <Route path="Heritage" element={<Heritage />} />
            <Route path="Wellness" element={<Wellness />} />
            <Route path="Conference" element={<Conference />} />
          </Route>
          {/* Villages */}
                  
          <Route path="Villas" element={<VillageContainer />}>
            <Route path="Independent" element={<Independent />} />
            <Route path="Luxury" element={<Luxury />} />
            <Route path="Beachfront" element={<Beachfront />} />
            <Route path="Mountain" element={<Mountain />} />
            <Route path="Countryside" element={<Countryside />} />
            <Route path="Island" element={<Island />} />
            <Route path="ButlerService" element={<ButlerService />} />
            <Route path="EcoFriendly" element={<EcoFriendly />} />
            <Route path="Smart" element={<Smart />} />


           {/* Palaces */}
        </Route>
          <Route path="PalaceContainer" element={<PalaceContainer />}>
          <Route path="RoyalPalace" element={<RoyalPalace />} />
          <Route path="LuxuryPalace" element={<LuxuryPalace />} />
          <Route path="HistoricPalace" element={<HistoricPalace />} />
          <Route path="GlassPalace" element={<GlassPalace />} />
          <Route path="DesertPalace" element={<DesertPalace />} />
          <Route path="MountainPalace" element={<MountainPalace />} />
          <Route path="BeachPalace" element={<BeachPalace />} />
          <Route path="FloatingPalace" element={<FloatingPalace />} />
          <Route path="SmartPalace" element={<SmartPalace />} />
          <Route path="PrivateEstatePalace" element={<PrivateEstatePalace />} />   
      </Route>
      
          <Route path="ChaletContainer" element={<ChaletContainer />}>
          <Route path="Mountain" element={<Mountain />} />
          <Route path="Alpine" element={<Alpine />} />
          <Route path="Beach" element={<Beach />} />
          <Route path="Desert" element={<Desert />} />
          <Route path="Forest" element={<Forest />} />
          <Route path="Lakeview" element={<Lakeview />} />
          <Route path="Wooden" element={<Wooden />} />
          <Route path="Eco" element={<Eco />} />
        </Route>


        {/* Hostels */}
        <Route path="Hostels" element={<HostelContainer />}>
          <Route path="Hostel" element={<Hostel />} />
          <Route path="GuestHouse" element={<GuestHouse />} />
          <Route path="Dormitory" element={<Dormitory />} />
          <Route path="YouthHostel" element={<YouthHostel />} />
          <Route path="Monastery" element={<Monastery />} />
          <Route path="StudentHousing" element={<StudentHousing />} />
          <Route path="SharedRoom" element={<SharedRoom />} />
          <Route path="Couchsurfing" element={<Couchsurfing />} />
          <Route path="CulturalStay" element={<CulturalStay />} />
          <Route path="TemporaryHousing" element={<TemporaryHousing />} />
        </Route>

        {/* Home Stay */}
        <Route path="Homestays" element={<HomestaysContainer />}>
          <Route index element={<BeachHouse />} />
          <Route path="BeachHouse" element={<BeachHouse />} />
          <Route path="CountryCottage" element={<CountryCottage />} />
          <Route path="EcoFriendlyHouse" element={<EcoFriendlyHouse />} />
          <Route path="FamilyHouse" element={<FamilyHouse />} />
          <Route path="IndependentVilla" element={<IndependentVilla />} />
          <Route path="LuxuryVilla" element={<LuxuryVilla />} />
          <Route path="MountainChalet" element={<MountainChalet />} />
          <Route path="SmartHome" element={<SmartHome />} />
        </Route>

        {/* Luxory */}
        <Route path="Luxury" element={<LuxuryContainer />}>
          <Route index element={<LuxuryVillaa />} />
          <Route path="LuxuryVilla" element={<LuxuryVillaa />} />
          <Route path="LuxuryPalace" element={<LuxuryPalacezzz />} />
          <Route path="LuxuryChalet" element={<LuxuryChalet />} />
          <Route path="PrivateIslandVilla" element={<PrivateIslandVilla />} />
          <Route path="LuxuryPenthouse" element={<LuxuryPenthouse />} />
          <Route path="UnderwaterHouse" element={<UnderwaterHouse />} />
          <Route path="GlassDesertHouse" element={<GlassDesertHouse />} />
          <Route path="LuxuryCastle" element={<LuxuryCastle />} />
        </Route>

          {/* PROFILE */}
            <Route path="ProfileE" element={<ProfileContainer />}>
            <Route path="ProfileInfo" element={<ProfileInfo />} />
            <Route path="UpdateProfile" element={<UpdateProfile />} />
            <Route path="Account" element={<Account />} />
            
            {/* Side Wepsite*/}
            <Route path="Privacy" element={<Privacy />} />
            <Route path="Help" element={<Help />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />

            </Route>
            </Route>
          {/* Payment Wepsite*/}
            <Route path="PaymentContainer" element={<PaymentContainer />}>
            <Route path="Pay_FirstStep" element={<Pay_FirstStep />} />
            <Route path="Pay_SecondStep" element={<Pay_SecondStep />} />
             <Route path="Completed" element={<Completed />} />
            </Route>
           

            
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
