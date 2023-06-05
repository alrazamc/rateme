import { Container } from "@mui/material";
import AppPublic from "./AppPublic";
import { useEffect } from "react";
import { loadAuth } from "./store/actions/authActions";
import { connect } from 'react-redux';
import AppPreloader from "./components/library/AppPreloader";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppBar from "./components/AppBar";
import AccountSettings from "./components/AccountSettings";
import Dashboard from "./components/Dashboard";
import Alert from "./components/library/Alert";
import BlockInterface from "./components/library/BlockInterface";
import AddDepartment from "./components/departments/AddDepartment";
import EditDepartment from "./components/departments/EditDepartment";
import Departments from "./components/departments/Departments";

import AddUser from "./components/users/AddUser";
import Users from "./components/users/Users";
import EditUser from "./components/users/EditUser";
import { userTypes } from "./utils/constants";
import Employees from "./components/employees/Employees";

const publicRoutes = ['/admin/signin', '/admin/forgot-password', '/admin/reset-password/']

function App({ user, isAuthLoaded, loadAuth, userType }) {
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
          
          {/* Departments routes */}
          { 
            userType === userTypes.USER_TYPE_SUPER &&  
            <>
              <Route path="/admin/departments" Component={Departments} />
              <Route path="/admin/departments/add" Component={AddDepartment} />
            </>
          }
          
          <Route path="/admin/departments/edit/:deptId" Component={EditDepartment} />

          {/* Users routes */}
          <Route path="/admin/users" Component={Users} />
          <Route path="/admin/users/add" Component={AddUser} />
          <Route path="/admin/users/edit/:userId" Component={EditUser} />

          <Route path="/admin/employees/:deptId" Component={Employees} />
        </Routes>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    userType: state.auth.userType,
    isAuthLoaded: state.auth.isLoaded
  }
}

export default connect(mapStateToProps, { loadAuth })(App);
