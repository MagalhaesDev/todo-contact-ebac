import styled from "styled-components";

export const Todo = styled.li`
   background-color: #f2f3f2;
   border-radius: 4px;
    padding: .5rem ;
   width: 100%;
   font-size: .85rem;
   display: flex;

   & div {
    flex-basis: 25%;
    text-align: center;
   }

   &  div:last-child {
    text-align: end;
   }
`

export const ContainerEdit = styled.div`
    display: flex;
    justify-content: end;
    gap: .25rem;
`

export const ButtonEdit = styled.button`
    border: none;
    cursor: pointer;
`
