import { useState } from "react";
import { Card, Dropdown, Flex, Input, Space, theme } from "antd";
import { EditOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";
import { Todo } from "../../types/todo.model";

interface ITodoCardProps {
  todo: Todo;
  onChangeStatus: (id: number, status: "todo" | "doing" | "done") => void;
  onEditTitle: (id: number, newTitle: string) => void;
}

const TodoCard: React.FC<ITodoCardProps> = ({
  todo,
  onChangeStatus,
  onEditTitle,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const { token } = theme.useToken();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditTitle(todo.id, newTitle);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTitle(todo.title);
  };

  const menuItems = [
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
      <Card
        style={{
          marginBottom: "10px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isEditing ? (
          <Space>
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              autoFocus
            />
            <Flex gap={10} align="center">
              <SaveOutlined
                onClick={handleSave}
                style={{ color: "green", cursor: "pointer" }}
              />
              <CloseOutlined
                onClick={handleCancel}
                style={{ color: "red", cursor: "pointer" }}
              />
            </Flex>
          </Space>
        ) : (
          <Space>
            <p style={{ flex: 1 }}>{todo.title}</p>
            <EditOutlined
              onClick={handleEdit}
              style={{ color: token.colorIcon, cursor: "pointer" }}
            />
          </Space>
        )}
      </Card>
    </Dropdown>
  );
};

export default TodoCard;
