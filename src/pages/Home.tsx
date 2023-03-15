import { useEffect, useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import * as S from "./Home.styles";
import "react-toastify/dist/ReactToastify.css";

import { TodoContext } from "../contexts/TodoContext";
import { ListItem } from "../components/ListItem";
import { AddItem } from "../components/AddItem";

const Home = () => {
  const { setTodos, todos } = useContext(TodoContext);
  const baseUrl = "https://dummyjson.com/todos";

  useEffect(() => {
    const getData = async () => {
      const { data: dataTodos } = await axios.get(`${baseUrl}?limit=3`);
      setTodos(dataTodos.todos);
    };
    getData();
  }, []);

  const handleAddTask = async (taskName: string) => {
    try {
      const { data: dataNewTodo } = await axios.post(
        `${baseUrl}/add`,
        {
          userId: 1,
          todo: taskName,
          completed: false,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const newIdDate = new Date().getTime();
      setTodos([...todos, { ...dataNewTodo, id: newIdDate }]);
      toast.success("Tarefa adicionada com sucesso !");

    } catch (error) {
      toast.error("Falha ao adicionar a tarefa!");
    }
  };

  const handleRemoveTask = (id: number) => {
    const newlist = todos.filter((item) => item.id !== id);

    setTodos(newlist);
    toast.info("Tarefa removida!");
  };

  return (
    <>
      <S.Container>
        <S.Content>
          <S.TitleHeader>Todo List</S.TitleHeader>
          <AddItem onAddTask={handleAddTask} />
          {todos.map((item) => (
            <ListItem key={item.id} item={item} onRemove={handleRemoveTask} />
          ))}
        </S.Content>
      </S.Container>
      <ToastContainer theme="dark" position="top-center" autoClose={3000} />
    </>
  );
};

export default Home;
