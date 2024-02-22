import { Pencil, Trash2 } from "lucide-react";
import { ButtonEdit, ContainerEdit, Todo } from "./styles";
import { EditContactForm } from "../EditContactForm";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { TodoContactProps } from "../../App";
import { remove } from "../../store/reducers/contacts";

interface TodoItemProps {
  task: TodoContactProps;
}

export function TodoItem({ task }: TodoItemProps) {
  const [isOpenEditTask, setIsOpenEditTask] = useState(false);
  const dispatch = useDispatch()

  function handleCloseAndOpenEditTodo() {
    setIsOpenEditTask(!isOpenEditTask);
  }

  function handleDeleteItem() {
    dispatch(remove(task.id));
  }

  return (
    <>
      <Todo>
        <div>{task.contact}</div>
        <div>{task.number}</div>
        <div>{task.mail}</div>
        <ContainerEdit>
          <ButtonEdit onClick={() => handleCloseAndOpenEditTodo()}>
            <Pencil size={20}  color="#E8C126"/>
          </ButtonEdit>
          <ButtonEdit onClick={() => handleDeleteItem()} >
            <Trash2 color="#ff0000"/>
          </ButtonEdit>
        </ContainerEdit>
      </Todo>
      {isOpenEditTask  && (<EditContactForm handleCloseAndOpenEditTodo={handleCloseAndOpenEditTodo} task={task} />)}
    </>
  );
}
