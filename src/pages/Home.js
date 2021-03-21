import Layout from '../components/common/Layout'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get } from '../utils/api'
import allAction from '../store/actions'
import cachedQuery from '../components/common/CachedResult'
import { ImageContainer, ListWrapper, ListCardWrapper, ListCardContainer } from '../components/common/ui/movieDetail'
import { Image } from '../components/common/ui/movieDetail';

const Home = () => {
    const selector = useSelector(state => state.searchReducer);
    const dispatch = useDispatch();
    const route = useHistory();

    const { movie_results, query } = selector;
    const { searchActions } = allAction;

    const getMovieDetailHandler = (e) => {
        dispatch(searchActions.setQuery(''));
        route.push(`/${e}`)
    }

    const initData = async () => {
        if(query){
            let data = await cachedQuery(get, query);
            dispatch(searchActions.setQuery(''));
            dispatch(searchActions.searchByName(data));
        }else{
            dispatch(searchActions.searchByName(null));
        }
    }

    useEffect(() => {
        initData();
        // eslint-disable-next-line
    },[]);

    return (
        <Layout>
            <ListWrapper>
                {movie_results && movie_results.map(({ Poster, Title, Year, imdbID }, i) => (
                    <ListCardWrapper key={imdbID}>
                        <ListCardContainer onClick={getMovieDetailHandler.bind(null, imdbID)}>   
                            <ImageContainer>
                                <Image src={Poster === 'N/A' ? 'https://image.shutterstock.com/image-vector/no-image-available-icon-fow-600w-1690416772.jpg' : Poster} alt={Title} maxWidth="1"/>
                            </ImageContainer>
                            <div>{Title}{" "}{Year}</div>
                        </ListCardContainer>
                    </ListCardWrapper>
                ))}
            </ListWrapper>
        </Layout>
    )
}

export default Home;