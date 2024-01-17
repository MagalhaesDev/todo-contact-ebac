import styled from "styled-components";

export const Todo = styled.li`
   background-color: #f2f3f2;
   border-radius: 4px;
   padding: .5rem;
   width: 100%;
   font-size: .85rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const ContainerEdit = styled.div`
    display: flex;
    gap: .25rem;
`

export const ButtonEdit = styled.button`
    border: none;
    cursor: pointer;

    &:hover {
        color: #0D9B49;
    }
`

export const ButtonTrash = styled.button`
    border: none;
`