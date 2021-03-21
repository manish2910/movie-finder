import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import './index.css';

render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    {routes.map((route, i) => <Route exact path={route.url} key={i} component={route.component} />)}
                </Switch>
            </Router>
        </ThemeProvider>
    </Provider>, 
    document.getElementById('root')
);