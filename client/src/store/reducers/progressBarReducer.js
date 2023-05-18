import { progressBarActionTypes } from "../actions/progressBarActions";

const initState = {
  loading: false
}

const progressBarReducer = (state = initState, action) => {
  switch(action.type)
  {
    case progressBarActionTypes.LOADING:
      return { loading: true }
    case progressBarActionTypes.LOADED:
      return { loading: false }
    default:
      return state;
  }
}

export default progressBarReducer;