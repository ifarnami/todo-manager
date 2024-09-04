import { Col, Empty } from "antd";
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
      {todos.length ? (
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onChangeStatus={onChangeStatus}
            onEditTitle={onEditTitle}
          />
        ))
      ) : (
        <Empty description="Edit your tasks using right-click!" />
      )}
    </Col>
  );
};

export default TodoColumn;
