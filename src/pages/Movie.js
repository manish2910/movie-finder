import Layout from '../components/common/Layout'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import { get } from '../utils/api';
import allAction from '../store/actions'
import { Main, Image, ImageContainer } from '../components/common/ui/movieDetail';
import { Button } from '../components/common/ui/Button';

const Movie = () => {
    const selector = useSelector(state => state.searchReducer);
    const themeSelector = useSelector(state => state.themeReducer);
    const dispach = useDispatch();
    const params = useParams();
    const route = useHistory();
    const { searchActions } = allAction;

    const { individual_movie } = selector;

    const { theme } = themeSelector;

    const { Title, Year, imdbRating, Runtime, Genre, Director, Country, Plot, Poster } = individual_movie;
    
    const getMovieDetails = async () => {
        let { movieid } = params;
        dispach(searchActions.searchByMovieName({}));
        const movie = await get('i', movieid);
        dispach(searchActions.setQuery(''));
        dispach(searchActions.searchByMovieName(movie));
    }

    const similarMovieHandler = () => {
        dispach(searchActions.searchByName([]));
        dispach(searchActions.setQuery(Title));
        route.push('/');
    } 

    useLayoutEffect(() => {
        getMovieDetails();
        // eslint-disable-next-line
    },[]);

    return (
        <Layout>
            { Title && (
                <Main
                    bgColor={(theme === 'light' || theme === true) ? 'light':'dark'}
                >
                    <ImageContainer>
                        <Image src={Poster} alt={Title} />
                    </ImageContainer>
                    <div>
                        {Year && <h1>{Title}{" "}({Year})</h1>}
                        {imdbRating && <div>IMDB Rating: {imdbRating}</div>}
                        {Runtime && <div>Runtime: {Runtime}</div>}
                        {Genre && <div>Genre: {Genre}</div>}
                        {Director && <div>Director: {Director}</div>}
                        {Country && <div>Country: {Country}</div>}
                        <p>{Plot}</p>
                    </div>
                </Main>
            )}
            {Title && <Button 
                            bgColor={(theme === 'light' || theme === true) ? 'light':'dark'}
                            onClick={similarMovieHandler}>View Similar</Button>}
        </Layout>
    )
}

export default Movie;