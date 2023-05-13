import { Button } from "@mui/material";
import { hideProgressBar, showProgressBar } from "./store/actions/progressBarActions";
import ProgressBar from "./components/library/ProgressBar";
import AppPublic from "./AppPublic";
import { useEffect } from "react";
import { loadAuth, signout} from "./store/actions/authActions";
import { connect } from 'react-redux';
import AppPreloader from "./components/library/AppPreloader";

function App({ user, isAuthLoaded, loadAuth, signout }) {
  useEffect(() => {
    loadAuth();
  }, []);

  if(!isAuthLoaded) return <AppPreloader message="Loading App...." />

  if(!user)
    return <AppPublic />
  return (
    <div className="App">
      You are signed in
      <Button onClick={signout}>Logout</Button>
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
