import AntdConfigProvider from "./provider/AntdConfigProvider";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <AntdConfigProvider>
      <Home />
    </AntdConfigProvider>
  );
};

export default App;
