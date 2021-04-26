import { combineReducers } from 'redux';
import usuarioReducer from './userReducer';

export default combineReducers({
    user: usuarioReducer,
})