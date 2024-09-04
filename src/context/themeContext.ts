import { createContext } from "react";
import { ThemeContext } from "../types/themeContext.model";

export const themeContext = createContext<ThemeContext | undefined>(undefined);
