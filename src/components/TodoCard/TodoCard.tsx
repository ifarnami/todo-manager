// src/components/TodoCard.tsx
import React from "react";
import { Card, Dropdown, MenuProps } from "antd";
import { Todo } from "../../types/todo.model";

interface TodoCardProps {
  todo: Todo;
  onChangeStatus: (id: number, status: "todo" | "doing" | "done") => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, onChangeStatus }) => {
  const menuItems: MenuProps["items"] = [
    { key: "todo", label: "Move to Todo" },
    { key: "doing", label: "Move to Doing" },
    { key: "done", label: "Move to Done" },
  ];

  const menu = {
    items: menuItems,
    onClick: ({ key }: { key: string }) =>
      onChangeStatus(todo.id, key as "todo" | "doing" | "done"),
  };

  return (
    <Dropdown menu={menu} trigger={["contextMenu"]}>
      <Card style={{ marginBottom: "10px", cursor: "pointer" }}>
        <p>{todo.title}</p>
      </Card>
    </Dropdown>
  );
};

export default TodoCard;
