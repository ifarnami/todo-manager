import AntdConfigProvider from "./provider/AntdConfigProvider";
import Home from "./pages/Home/Home";
import ThemeProvider from "./provider/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <AntdConfigProvider>
        <Home />
      </AntdConfigProvider>
    </ThemeProvider>
  );
};

export default App;
