import styled from "styled-components";

export const FormEditContact = styled.form`
   display: flex;
   width: 100%;
   padding: .5rem;
   gap: 1rem;

   & > input {
    flex-basis: 25%;
    text-align: center;
   }

   & > div {
    flex-basis: 25%;
    text-align: end;
   }

   &  button {
      border: none;
      cursor: pointer;
   }
`
interface InputFormEditContactProps {
   inputInvalid: true | false
}

export const InputFormEditContact = styled.input<InputFormEditContactProps>`
   border-radius: 4px;
   border: 1px solid;

   ${(props) =>
        props.inputInvalid ? `border-color: red` : `border-color: transparent`
    }
`