import React from "react";
import { Input, Button, Flex, Space, Switch } from "antd";

interface IHeaderProps {
  onSearch: (value: string) => void;
  onAddTodo: () => void;
  handleThemeChange: () => void;
}

const Header: React.FC<IHeaderProps> = ({ onSearch, onAddTodo, handleThemeChange }) => {
  return (
    <Flex
      justify="space-between"
      style={{
        marginBottom: "20px",
      }}
    >
      <Input
        placeholder="Search todos"
        onChange={(e) => onSearch(e.target.value)}
        style={{ width: "300px" }}
      />
      <Space>
        <Switch
          checkedChildren="Dark"
          unCheckedChildren="Light"
          onChange={handleThemeChange}
        />
        <Button type="primary" onClick={onAddTodo}>
          Add Todo
        </Button>
      </Space>
    </Flex>
  );
};

export default Header;
