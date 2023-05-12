import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { hideProgressBar, showProgressBar } from "./store/actions/progressBarActions";
import ProgressBar from "./components/library/ProgressBar";
import AppPublic from "./AppPublic";
import { useEffect } from "react";
import { loadAuth, loadToken } from "./store/actions/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( loadToken() );
    dispatch( loadAuth() );
  }, []);

  return <AppPublic />
  return (
    <div className="App">
      <Button onClick={() => dispatch( showProgressBar() ) }>Show Progress Bar</Button>
      <Button onClick={() => dispatch( hideProgressBar() ) }>Hide Progress Bar</Button>
      <ProgressBar />
    </div>
  );
}

export default App;
