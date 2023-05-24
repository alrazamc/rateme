import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import progressBarReducer from "./progressBarReducer";
import departmentReducer from "./departmentReducer";

const { combineReducers } = require( "redux" )

const allReducers = {
  auth: authReducer,
  alert: alertReducer,
  departments: departmentReducer,
  progressBar: progressBarReducer
}

const rootReducer = combineReducers(allReducers);
export default rootReducer;