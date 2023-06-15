import { Route, Routes } from "react-router-dom";
import Signin from "./components/auth/SignIn";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import { Box } from "@mui/material";
import Alert from "./components/library/Alert";
import Home from "./components/feedback/Home";

function AppPublic(){
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Alert />
      <Routes>
        <Route path="/admin/signin" Component={Signin} />
        <Route path="/admin/forgot-password" Component={ForgotPassword} />
        <Route path="/admin/reset-password/:resetCode" Component={ResetPassword} />
        <Route path="/" Component={Home} />
      </Routes>
    </Box>
  )
}

export default AppPublic;