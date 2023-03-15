import { createContext, useState, Dispatch, SetStateAction } from "react";
import { TodoType } from "../types/Todo";

type TodoContextType = {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
};

type TodoProviderType = {
  children: React.ReactNode;
};

const initialState: TodoContextType = {
  todos: [],
  setTodos: () => {},
};

export const TodoContext = createContext<TodoContextType>(initialState);

export const TodosProvider = ({ children }: TodoProviderType) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
