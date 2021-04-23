import { combineReducers } from 'redux';
import usuarioReducer from './userReducer';
import filterReducer from './filterReducer';
import countryReducer from './countryReducer';

export default combineReducers({
    user : usuarioReducer,
    filter: filterReducer,
    country: countryReducer,
})