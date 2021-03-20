import { combineReducers } from 'redux';
import login from './login';
import majors from './majors';

export default combineReducers({
    login,
    majors
})