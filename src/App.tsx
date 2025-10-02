import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import ChatConversation from "./components/ChatConversation";
import Login from "./Authuntcation/Login";
import Dashboard from "./pages/admin/Dashboard";
import UserProfile from "./pages/UserProfile/UserProfile";
import AuthLayout from "./Authuntcation/AuthLayout";
import Register from "./Authuntcation/Register";
import Forget from "./Authuntcation/Forget";
import Reset from "./Authuntcation/Reset";
import Verifi from "./Authuntcation/Verifi";
import ChangePass from "./Authuntcation/ChangePass";
import PropertyList from "./components/PropertyList";
import GYMS from "./categories/GYMS";
import Resturants from "./categories/Resturants";
import Hotels from "./categories/Hotels";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Navigate to="/HomeList" />} />
         
          <Route path="/signup" element={<Signup />}></Route>
          {/* <Route path="/admin/auth" element={<Login />}></Route> */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/pro-mode" element={<ProMode />}></Route>
          <Route path="/chat/messages/1" element={<ChatConversation />}></Route>
          <Route path="/chat/messages/2" element={<ChatConversation />}></Route>
          <Route path="/pro-mode" element={<ProMode />}></Route>
          <Route path="/create-ad" element={<CreateAd />}></Route>
          <Route path="/property/:id" element={<Property />}></Route>
          <Route path="/account/my-ads" element={<MyAds />} />
          <Route path="/account/my-favorites" element={<MyFavorites />} />
          <Route path="/account/settings" element={<Settings />} />
          <Route path="/account/user-profile" element={<UserProfile />} />

           {/*AuthLayout*/}
          <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget" element={<Forget />} />
          <Route path="reset" element={<Reset/>} />
          <Route path="verify" element={<Verifi />} />
          <Route path="ChangePass" element={<ChangePass />} />
        </Route>

        <Route path="HomeList" element={<Home/>}>
          <Route index element={<PropertyList/>}/>
           <Route path="GYMS" element={<GYMS/>}/>
            <Route path="Resturants" element={<Resturants/>}/>
             <Route path="Hotels" element={<Hotels/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
