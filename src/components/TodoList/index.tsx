import { useState } from "react";
import { TodoHeader } from "../TodoHeader";
import { TodoItem } from "../TodoItem";
import { Container, ContainerList, ButtonAddNewContact, MessageNotContact } from "./styles";
import { Minus, Plus } from "lucide-react"
import { FormAddNewContact } from "../FormAddNewContact";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";


export function TodoList() {
  const tasks = useSelector((state: RootReducer) => state.contact.contacts)
  const [isOpenNewContact, setIsOpenNewContact] = useState(false);


  function handleOpenFormContact () {
    setIsOpenNewContact(!isOpenNewContact)
  }

  return (
    <Container>
      <h1>TodoList</h1>
      <ButtonAddNewContact onClick={() => handleOpenFormContact()} isOpenNewContact={isOpenNewContact}>
        <span>
          {isOpenNewContact ? (<Minus strokeWidth={3} color="#fff"/>) : (<Plus strokeWidth={3} color="#fff"/>)}
        </span>
      </ButtonAddNewContact>
      <FormAddNewContact isOpenNewContact={isOpenNewContact} handleOpenFormContact={handleOpenFormContact} />
      <ContainerList>
        <TodoHeader />
        {tasks.length > 0 ? tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        )) : 
          (
            <MessageNotContact>
              <h2>Nenhum contato</h2>
              <p>
                Clique no + para adicionar novos contatos
              </p>
            </MessageNotContact>
          )
        }
      </ContainerList>
    </Container>
  );
}
