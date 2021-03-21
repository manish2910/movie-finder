import styled from 'styled-components';
import { deviceLessThan, deviceGreaterThan } from '../../../styles/breakpoints'
import theme from '../../../styles/theme';

export const Main = styled.div`
    display:flex;
    background-color:${props => props.bgColor && theme[props.bgColor].CARD_DETAILS_COLOR};
    width:75%;
    margin:20px auto 10px;
    border-radius:10px;
    overflow:hidden;
    & > div:last-child{
        text-align:start;
        padding:20px 20px 20px 40px;
        color:${props => props.bgColor && theme[props.bgColor].CARD_DETAILS_TEXT_COLOR}
    }

    & > div div{
        font-size:20px
    }

    & > div > p{
        font-size:19px;
        padding-top:20px
    }
`;

export const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    padding-top:50px;
`;

export const ListCardWrapper = styled.div`
    display: flex;
    padding: 15px 0px;
    
    @media${deviceGreaterThan.laptop} {
        width: 33.3333%;
    }
    @media${deviceLessThan.laptop} {
        width: 50%;
    }
    @media${deviceLessThan.tablet} {
        width: 50%;
    }
    @media${deviceLessThan.tabletS} {
        width: 100%;
    }
`;

export const ListCardContainer = styled.div`
    border-radius: 15px;
    background-color: #00000080;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin:0 auto;
    cursor:pointer;
    max-width:300px;
    & > div:last-child{
        padding: 10px;
        font-size: 18px;
        color:white
    }
`;

export const Image = styled.img`
    height:100%;
`;

export const ImageContainer = styled.div`
    height:auto;
    align-self: center;
`;