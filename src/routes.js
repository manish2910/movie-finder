import Home from './pages/Home';
import Movie from './pages/Movie';
import Sova from './pages/Sova';

export const routes = [
    {
      'url': "/",
      'component': Home
    },
    {
      'url':"/sova",
      'component':Sova
    },
    {
      'url': "/:movieid",
      'component': Movie
    }
];