import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Main = styled.div`
    background-color:${props => props.bgColor && theme[props.bgColor].MAIN_BACKGROUND_COLOR};
    min-height:100vh;
    height:100%;
    text-align:center;
`;