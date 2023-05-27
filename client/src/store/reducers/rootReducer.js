import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import progressBarReducer from "./progressBarReducer";
import departmentReducer from "./departmentReducer";
import userReducer from "./userReducer";

const { combineReducers } = require( "redux" )

const allReducers = {
  auth: authReducer,
  alert: alertReducer,
  departments: departmentReducer,
  progressBar: progressBarReducer,
  users: userReducer,
}

const rootReducer = combineReducers(allReducers);
export default rootReducer;