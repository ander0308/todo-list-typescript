import { createContext } from "react";
import { TodoType } from "../types/Todo";


export const TaskContext = createContext<TodoType[]>([])
