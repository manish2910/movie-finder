import {
    CHANGE_THEME
} from '../../types/types';

const initialState = {
    theme:localStorage.getItem('theme') === 'dark' ? false : true
}

const themeReducer = (state = initialState, action) => {
    let { type } = action;
    switch(type){
        case CHANGE_THEME:{
            return {
                ...state,
                theme:action.payload
            };
        }
        default:
            return state;
    }
};

export default themeReducer;