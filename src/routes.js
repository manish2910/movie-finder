import Home from './pages/Home';
import Movie from './pages/Movie';

export const routes = [
    {
      'url': "/",
      'component': Home
    },
    {
      'url': "/:movieid",
      'component': Movie
    }
];