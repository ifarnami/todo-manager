import React, { useState, useEffect } from "react";
import { Row, Layout, Spin, Alert } from "antd";
import Header from "../../components/Header/Header";
import TodoColumn from "../../components/TodoColumn/TodoColumn";
import TodoModal from "../../components/TodoModal/TodoModal";
import { useTodos } from "../../hooks/useTodos";

const { Content } = Layout;

const App: React.FC = () => {
  const { todos, loading, error, addTodo, changeStatus } = useTodos();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] =
    useState<string>(searchTerm);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    const lowercasedValue = debouncedSearchTerm.toLowerCase();
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(lowercasedValue)
    );
    setFilteredTodos(filtered);
  }, [debouncedSearchTerm, todos]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleAddTodo = (title: string) => {
    addTodo(title);
    setModalVisible(false);
  };

  if (loading) return <Spin />;
  if (error)
    return <Alert message="Error" description={error} type="error" showIcon />;

  return (
    <Layout style={{ minHeight: "100vh", padding: "20px" }}>
      <Header onSearch={handleSearch} onAddTodo={() => setModalVisible(true)} />
      <Content>
        <Row gutter={16}>
          <TodoColumn
            title="To Do"
            todos={filteredTodos.filter((todo) => todo.status === "todo")}
            onChangeStatus={changeStatus}
          />
          <TodoColumn
            title="Doing"
            todos={filteredTodos.filter((todo) => todo.status === "doing")}
            onChangeStatus={changeStatus}
          />
          <TodoColumn
            title="Done"
            todos={filteredTodos.filter((todo) => todo.status === "done")}
            onChangeStatus={changeStatus}
          />
        </Row>
      </Content>
      <TodoModal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAddTodo}
      />
    </Layout>
  );
};

export default App;
