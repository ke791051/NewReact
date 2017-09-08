import { combineReducers } from 'redux-immutable'
import list from './listReducer'

const rootReducer = combineReducers({
  list,
});

export default rootReducer
