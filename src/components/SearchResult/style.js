import styled from 'styled-components';

export const ListContainer = styled.div`
    width: 95%;
    height:0px;
    margin:0 auto;
`;

export const ListCard = styled.div`
   width:95%;
   color:black;
   padding:8px;
   text-align:start;
   background-color:white;
   border-bottom:1px solid grey;
   cursor:pointer;
   position:relative;
   &:hover{
    background-color:#0cd6b0;
   }
`;