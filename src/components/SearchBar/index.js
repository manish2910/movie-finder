import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchResult from '../SearchResult';
import cachedQuery from "../common/CachedResult";
import { useHistory } from 'react-router-dom';
import { get } from '../../utils/api';
import searchIcon from '../../images/search.png';
import './index.css'
import debounce from '../common/Debounce';
import allAction from "../../store/actions";

const InputBar = () => {
    const selector = useSelector(state => state.searchReducer);
    const [movieName, setMovieName] = useState('');
    const [options, setOptions] = useState([]);
    const params = useParams();
    const route = useHistory();
    const dispatch = useDispatch();
    const { searchActions } = allAction;
    const { query } = selector;

    const getSuggestions = async (name, ds) => {
        if(name && name.length > 2){
            let response = await cachedQuery(get, name);
            if(ds === 'dropdownSuggestion'){
                setOptions(response);
            }else{
                dispatch(searchActions.searchByName(response));
                dispatch(searchActions.setQuery(name));
                setOptions([]);
            }
        }else{
            setOptions([]);
        }
	};
// eslint-disable-next-line
    const debouncedSave = useCallback(debounce((val, ds) => getSuggestions(val, ds), 1000),[]);

    const updateValue = e => {
        if((e.key === 'Enter' || e === 'Search')){
            debouncedSave(movieName.trim());
            if(params && params.movieid){
                route.replace('/');
            }
        }else{
            setMovieName(e.target.value);
            debouncedSave(e.target.value.trim(), 'dropdownSuggestion');
        }
    };

    useEffect(()=>{
        if(query){
            setMovieName(query.trim())
        }
        return () => {
            setOptions([]);
        }
    },[query]);

    return (
        <div>
            <div className="search">
                <input type="text" className="search_term" onChange={updateValue} onKeyPress={updateValue} value={movieName} placeholder="Enter a movie name"/>
                <button type="submit" onClick={updateValue.bind(null, 'Search')} className="search_button">
                    <img src={searchIcon} alt="searc-movie-icon" style={{ maxWidth:'20px' }}/>
                </button>
            </div>
            <SearchResult list={options} setOpt={setOptions}/>
        </div>
    )
}

export default InputBar;