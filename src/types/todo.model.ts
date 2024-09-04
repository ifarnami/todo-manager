export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  status: "todo" | "doing" | "done";
};
