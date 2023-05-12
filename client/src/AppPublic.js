import { Route, Routes } from "react-router-dom";
import Signin from "./components/auth/SignIn";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import { Box } from "@mui/material";
import Alert from "./components/library/Alert";

function AppPublic(){
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Alert />
      <Routes>
        <Route path="/admin/signin" Component={Signin} />
        <Route path="/admin/forgot-password" Component={ForgotPassword} />
        <Route path="/admin/reset-password/:resetCode" Component={ResetPassword} />
      </Routes>
    </Box>
  )
}

export default AppPublic;