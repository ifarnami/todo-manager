import { Col } from "antd";
import { Todo } from "../../types/todo.model";
import TodoCard from "../TodoCard/TodoCard";

interface TodoColumnProps {
  title: string;
  todos: Todo[];
  onChangeStatus: (id: number, status: "todo" | "doing" | "done") => void;
}

const TodoColumn: React.FC<TodoColumnProps> = ({
  title,
  todos,
  onChangeStatus,
}) => {
  return (
    <Col span={8}>
      <h2>{title}</h2>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onChangeStatus={onChangeStatus} />
      ))}
    </Col>
  );
};

export default TodoColumn;
