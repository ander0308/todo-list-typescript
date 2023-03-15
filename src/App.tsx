import { useEffect, useState } from "react";

import { GlobalStyled } from "./globalStyles";
import * as S from "./App.styles";

import { TodoType } from "./types/Todo";
import { ListItem } from "./components/ListItem";
import { AddItem } from "./components/AddItem";
// import { TaskContext } from "./contexts/TaskContext";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const baseUrl = "https://dummyjson.com/todos";

  useEffect(() => {
    const getData = async () => {
      const { data: dataTodos } = await axios.get(`${baseUrl}?limit=5`);
      setTodos(dataTodos.todos);
    };
    getData();
  }, []);

  const handleAddTask = async (taskName: string) => {
    const { data: dataNewTodo } = await axios.post(
      `${baseUrl}/add`,
      {
        userId: 1,
        todo: taskName,
        completed: false,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    const newIdDate = new Date().getTime()
    setTodos([...todos, { ...dataNewTodo, id: newIdDate }]);
  };

  const handleRemoveTask = (id: number) => {
    const newlist = todos.filter((item) => item.id !== id );

    setTodos(newlist);
  };

  return (
    <>
      <GlobalStyled />
      {/* <TaskContext.Provider value={todos}> */}
        <S.Container>
          <S.Content>
            <S.TitleHeader>Todo List</S.TitleHeader>

            <AddItem onAddTask={handleAddTask} />
            {todos.map((item) => (
              <ListItem key={item.id} item={item} onRemove={handleRemoveTask} />
            ))}
          </S.Content>
        </S.Container>
      {/* </TaskContext.Provider> */}
    </>
  );
};

export default App;
