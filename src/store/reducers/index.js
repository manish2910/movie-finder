import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import themeReducer from './themeReducer';

export default combineReducers({
    searchReducer,
    themeReducer
});