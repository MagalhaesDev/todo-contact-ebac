import { Provider } from "react-redux";
import { TodoList } from "./components/TodoList";
import { GlobalStyle } from "./styles";
import { store } from "./store";

export interface TodoContactProps {
  id: number;
  contact: string;
  number: string;
  mail: string;
}

export function App() {
  return (
    <>
      <Provider store={store}>
          <TodoList/>
      </Provider>
      <GlobalStyle />
    </>
  )
}
