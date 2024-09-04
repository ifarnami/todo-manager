import React from "react";
import { Input, Button } from "antd";

interface IHeaderProps {
  onSearch: (value: string) => void;
  onAddTodo: () => void;
}

const Header: React.FC<IHeaderProps> = ({ onSearch, onAddTodo }) => {
  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Input
        placeholder="Search todos"
        onChange={(e) => onSearch(e.target.value)}
        style={{ width: "300px" }}
      />
      <Button type="primary" onClick={onAddTodo}>
        Add Todo
      </Button>
    </div>
  );
};

export default Header;
