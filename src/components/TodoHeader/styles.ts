import styled from "styled-components";

export const HeaderTodo = styled.div`
   background-color: #000;
   border-radius: 2px;
   padding: .5rem 1rem;
   width: 100%;
   display: flex;
   font-size: .85rem;
   gap: 1rem;
   

   & div {
    color: #fff;
    flex-basis: 25%;
    text-align: center;
   }

   & div:last-child {
    text-align: end;
   }
`