import { Pencil, Trash2 } from "lucide-react";
import { ButtonEdit, ButtonTrash, ContainerEdit, Todo } from "./styles";

export function TodoItem() {
  return (
    <Todo>
      <div>Mateus</div>
      <div>(19) 32323-3322</div>
      <div>São Paulo</div>
      <ContainerEdit>
        <ButtonEdit>
          <Pencil size={20} />
        </ButtonEdit>
        <ButtonTrash>
          <Trash2 />
        </ButtonTrash>
      </ContainerEdit>
    </Todo>
  );
}
