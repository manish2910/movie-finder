import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Button = styled.button`
   width:250px;
   padding:10px;
   margin:0 auto;
   background-color:${props => props.bgColor && theme[props.bgColor].SIMILAR_BUTTON_COLOR};
   color:${props => props.bgColor && theme[props.bgColor].SIMILAR_BUTTON_TEXT_COLOR};
   border:none;
   border-radius:5px;
   font-size:20px;
   cursor:pointer;
`;