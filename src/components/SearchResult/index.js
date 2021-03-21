import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { get } from '../../utils/api';
import allAction from "../../store/actions";
import { useEffect } from 'react';
import { ListContainer, ListCard } from './style';

const SearchResult = ({ list, setOpt }) => {
    const selector = useSelector(state => state.searchReducer);
    const params = useParams();
    const dispatch = useDispatch();
    let route = useHistory();
    const { searchActions } = allAction;
    const { query } = selector;

    const getMovieDetails = async (id) => {
        const { movieid } = params;
        if(id !== movieid){
            let movie = await get('i', id);
            dispatch(searchActions.setQuery(query));
            dispatch(searchActions.searchByMovieName(movie))
            setOpt([]);
            route.push(`/${movie.imdbID}`);
        }else{
            setOpt([]);

        }
    }

    useEffect(()=>{
        if(query){
            dispatch(searchActions.setQuery(query));
        }
        // eslint-disable-next-line
    },[query])

    return (
        <ListContainer>
            {list && list.map((element, i) => {
                const { Title, Year, imdbID } = element;
                return (
                    <ListCard key={imdbID} onClick={getMovieDetails.bind(null, imdbID)}>
                        {Title}{" "}{Year}
                    </ListCard>
                )
            })}
        </ListContainer>
    )
}

export default SearchResult;