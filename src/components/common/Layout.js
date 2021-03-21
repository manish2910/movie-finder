import uitheme from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import Header from '../Header'
import { useSelector } from 'react-redux';
import { Main } from "./ui/main";

const Layout = ({ children }) => {
    const selector = useSelector(state => state.themeReducer);
    let { theme } = selector;

    return (
        <ThemeProvider theme={uitheme}>
            <Main
                bgColor={(theme === 'light' || theme === true) ? 'light':'dark'}
            >
                <Header/>
                {children}
            </Main>
        </ThemeProvider>
    )
}

export default Layout;