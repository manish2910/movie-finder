import InputBar from '../SearchBar'
import ToggleTheme from '../ToggleTheme'
import logo from '../../images/logo.png'
import { HeaderContainer, HeaderChildDiv, Image } from './style';
import { useSelector } from 'react-redux';

const Header = () => {
    const selector = useSelector(state => state.themeReducer);
    let { theme } = selector;

    return (
        <HeaderContainer
            bgColor={(theme === 'light' || theme === true) ? 'light':'dark'}
        >
            <HeaderChildDiv>
                <Image src={logo} alt="movie-finder-app-logo" />
            </HeaderChildDiv>
            <HeaderChildDiv>
               <InputBar />
            </HeaderChildDiv>
            <HeaderChildDiv>
                <ToggleTheme />
            </HeaderChildDiv>
        </HeaderContainer>
    )
}

export default Header;