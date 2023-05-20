import { Box, Button, Container } from "@mui/material";
import { hideProgressBar, showProgressBar } from "./store/actions/progressBarActions";
import ProgressBar from "./components/library/ProgressBar";
import AppPublic from "./AppPublic";
import { useEffect } from "react";
import { loadAuth, signout} from "./store/actions/authActions";
import { connect } from 'react-redux';
import AppPreloader from "./components/library/AppPreloader";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppBar from "./components/AppBar";
import AccountSettings from "./components/AccountSettings";
import Dashboard from "./components/Dashboard";
import Alert from "./components/library/Alert";
import BlockInterface from "./components/library/BlockInterface";

const publicRoutes = ['/admin/signin', '/admin/forgot-password', '/admin/reset-password/']

function App({ user, isAuthLoaded, loadAuth, signout }) {
  const location = useLocation();
  useEffect(() => {
    loadAuth();
  }, []);

  if(!isAuthLoaded) return <AppPreloader message="Loading App...." />

  if(user && publicRoutes.find(url => location.pathname.startsWith(url)) )
    return <Navigate to="/admin/dashboard" />
  if(!user && !publicRoutes.find(url => location.pathname.startsWith(url)) )
    return <Navigate to="/admin/signin" />
  if(location.pathname === '/' || location.pathname === '/admin')
    return <Navigate to="/admin/signin" />

  if(!user)
    return <AppPublic />
  return (
    <div className="App">
      <AppBar />
      <Alert />
      <Container  sx={{ mt: 10, p:3, position: 'relative', backgroundColor: '#fff', borderRadius:"5px", boxShadow: "0px 0px 17px 5px #dbdada" }} maxWidth="lg">
        <BlockInterface />
        <Routes>
          <Route path="/admin/account-settings" Component={AccountSettings} />
          <Route path="/admin/dashboard" Component={Dashboard} />
        </Routes>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isAuthLoaded: state.auth.isLoaded
  }
}

export default connect(mapStateToProps, { loadAuth, signout })(App);
