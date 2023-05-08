import { Route, Routes } from "react-router-dom";
import Signin from "./components/auth/SignIn";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";

function AppPublic(){
  return (
    <Routes>
      <Route path="/admin/signin" Component={Signin} />
      <Route path="/admin/forgot-password" Component={ForgotPassword} />
      <Route path="/admin/reset-password/:resetCode" Component={ResetPassword} />
    </Routes>
  )
}

export default AppPublic;