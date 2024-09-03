// src/hooks/useTodos.ts
import { useState, useEffect } from "react";
import { Todo } from "../types/todo.model";
import { axiosInstance } from "../config/api";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axiosInstance.get<Todo[]>("todos");
        const todosWithStatus = response.data.map((todo) => ({
          ...todo,
          status: "todo" as "todo" | "doing" | "done",
        }));
        setTodos(todosWithStatus);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch todos");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      userId: 1,
      id: todos.length + 1,
      title,
      completed: false,
      status: "todo",
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const changeStatus = (id: number, status: "todo" | "doing" | "done") => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  };

  return { todos, loading, error, addTodo, changeStatus };
};
