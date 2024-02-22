import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const ContainerList = styled.ul`
  padding: 1rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  gap: .5rem;
`;

interface ButtonAddNewContactProps {
  isOpenNewContact: true | false
}

export const ButtonAddNewContact = styled.button<ButtonAddNewContactProps>`
  margin-top: 2rem;
  padding: .2rem .75rem;
  border: none;
  font-size: 2rem;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  

  ${(props) =>
    props.isOpenNewContact ? "background-color: red;" : "background-color: green;"
  }
`

export const MessageNotContact = styled.div`
     height: 30%;
     display: flex;
     gap: 1rem;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     background-color: #f6f6f6;

     & h2 {
      color: green;
     }

     & p {
      color: #6A6A6A;
     }
`