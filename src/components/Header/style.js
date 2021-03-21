import styled from 'styled-components';
import { deviceLessThan } from '../../styles/breakpoints'
import theme from '../../styles/theme';

export const HeaderContainer = styled.header`
    display:flex;
    justify-content:space-evenly;
    padding:5px 0px;
    background-color:${props => props.bgColor && theme[props.bgColor].HEADER };
`;

export const HeaderChildDiv = styled.div`
    flex:2; 
    text-align:center;
    align-self:center;
    &:first-child{
        flex:1; 
    }
    &:last-child{
        flex:1; 
    }
    @media ${deviceLessThan.tablet}{
        flex: unset;
        &:last-child{
            padding: 0px 5px;
        }
    }
`;

export const Image = styled.img`
    max-width:50px;
`;