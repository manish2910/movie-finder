import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(Reducer, initialState, applyMiddleware(...middleware));

let currentState = store.getState();

store.subscribe(() => {
    let prevState = currentState;
    currentState = store.getState();

    if(prevState.themeReducer.theme !== currentState.themeReducer.theme){
        localStorage.setItem('theme', currentState.themeReducer.theme); 
    }
});

export default store;