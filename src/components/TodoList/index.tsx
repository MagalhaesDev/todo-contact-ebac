import { TodoHeader } from "../TodoHeader";
import { TodoItem } from "../TodoItem";
import { Container, ContainerList } from "./styles";

export function TodoList() {
  return (
    <Container>
        <h1>TodoList</h1>
      <ContainerList>
        <TodoHeader />
        <TodoItem />
        <TodoItem />
      </ContainerList>
    </Container>
  );
}
