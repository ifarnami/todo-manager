import { ConfigProvider } from "antd";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { darkThemeVar, lightThemeVar } from "../constants/theme";

const AntdConfigProvider = ({ children }: React.PropsWithChildren) => {
  const context = useContext(themeContext);

  const themeVars = context?.theme === "dark" ? darkThemeVar : lightThemeVar;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeVars.colorPrimary,
          colorBgBase: themeVars.colorBgBase,
          colorBgContainer: themeVars.colorBgContainer,
          colorTextBase: themeVars.colorTextBase,
          colorTextSecondary: themeVars.colorTextSecondary,
          colorBorder: themeVars.colorBorder,
          colorIcon: themeVars.colorIcon,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfigProvider;
