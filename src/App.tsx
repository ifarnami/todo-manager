import { Button } from "antd";
import AntdConfigProvider from "./provider/AntdConfigProvider";

const App = () => {
  return (
    <AntdConfigProvider>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
    </AntdConfigProvider>
  );
};

export default App;
