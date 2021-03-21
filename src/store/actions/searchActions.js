import { SEARCH_RESULTS, MOVIE_DETAILS, CACHED_RESULT, SEARCH_QUERY } from '../../types/types'

const searchByName = movie => {
    return {
        type: SEARCH_RESULTS,
        payload: movie
    }
}

const setCachedResults = (movie, query) => {
    let obj = {};
    obj[`${query}`] = movie;
    return {
        type: CACHED_RESULT,
        payload: obj
    }
}

const setQuery = name => {
    return {
        type:SEARCH_QUERY,
        payload:name
    }
}

const searchByMovieName = movie => {
    return {
        type:MOVIE_DETAILS,
        payload:movie
    }
}
// eslint-disable-next-line
export default {
    searchByName,
    setQuery,
    setCachedResults,
    searchByMovieName
}