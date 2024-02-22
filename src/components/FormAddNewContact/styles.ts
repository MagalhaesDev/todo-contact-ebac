import styled from "styled-components";

interface AddNewContactProps {
    isOpenNewContact: true | false;
}

export const AddNewContact = styled.form<AddNewContactProps>`
    ${props => props.isOpenNewContact ? "display: flex;": "display: none;"}

    margin-top: 2rem;
    flex-direction: column;
    gap: .5rem;
`;

interface InputFormContactProps {
    inputInvalid: true | false
}

export const InputFormContact = styled.input<InputFormContactProps>`
    border: 1px solid;
    padding: 0 .5rem;
    color: #575757;
    width:  20rem;
    height: 2rem;
    border-radius: 4px;
    border-radius: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    background-color: #fff; 
    
    ${(props) =>
        props.inputInvalid ? `border-color: red` : `border-color: transparent`
    }
`

export const ButtonFormContact = styled.button`
    cursor: pointer;
    background-color: green;
    color: #fff;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-delay: 150ms;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    border: none;
    padding: .5rem 3rem;
    border-radius: 4px;
    text-align: center;
    border-radius: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

    &:hover {
        background-color: #00522A;
    }
`