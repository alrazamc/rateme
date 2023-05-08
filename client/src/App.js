import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { hideProgressBar, showProgressBar } from "./store/actions/progressBarActions";
import ProgressBar from "./components/library/ProgressBar";
import AppPublic from "./AppPublic";

function App() {
  const dispatch = useDispatch();
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
