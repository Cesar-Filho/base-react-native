import React, {createContext, useContext, useState} from 'react';

import {Spacing, ThemeDark, ThemeLight, ThemeMain} from '@theme/index';

export interface ThemeProps {
  colors: typeof ThemeMain;
  spacing: typeof Spacing;
}

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  theme: ThemeProps;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode(state => !state);

  const colors = isDarkMode ? ThemeDark : ThemeLight;
  const theme = {colors, spacing: Spacing};

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode, theme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
