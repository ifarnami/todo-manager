import { Col } from "antd";
import TodoCard from "../TodoCard/TodoCard";
import { Todo } from "../../types/todo.model";

interface ITodoColumnProps {
  title: string;
  todos: Todo[];
  onChangeStatus: (id: number, status: "todo" | "doing" | "done") => void;
  onEditTitle: (id: number, newTitle: string) => void;
}

const TodoColumn: React.FC<ITodoColumnProps> = ({
  title,
  todos,
  onChangeStatus,
  onEditTitle,
}) => {
  return (
    <Col span={8}>
      <h2>{title}</h2>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onChangeStatus={onChangeStatus}
          onEditTitle={onEditTitle}
        />
      ))}
    </Col>
  );
};

export default TodoColumn;
