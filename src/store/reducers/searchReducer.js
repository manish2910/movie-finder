import {
    SEARCH_RESULTS,
    MOVIE_DETAILS,
    SEARCH_QUERY
} from '../../types/types';

const initialState = {
    movie_results:[],
    query:'',
    individual_movie:{}
}

const movieReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch(type){
        case SEARCH_RESULTS:
            return {
                ...state,
                movie_results:payload
            };
        case MOVIE_DETAILS:
            return {
                ...state,
                individual_movie:payload
            };
        case SEARCH_QUERY:
            return {
                ...state,
                query:payload
            };
        default:
            return state;
    }
};

export default movieReducer;