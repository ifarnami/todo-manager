import { useState } from "react";
import { Modal, Input, Form } from "antd";

interface ITodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string) => void;
}

const TodoModal: React.FC<ITodoModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState("");

  const handleOk = () => {
    onAdd(title);
    setTitle("");
    onClose();
  };

  return (
    <Modal
      title="Add New Todo"
      open={isOpen}
      onOk={handleOk}
      onCancel={onClose}
    >
      <Form>
        <Form.Item>
          <Input
            placeholder="Enter todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TodoModal;
