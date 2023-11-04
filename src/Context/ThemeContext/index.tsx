import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeMode, darkTheme, lightTheme } from '@/styles/theme';

interface ThemeContextInterface {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

interface ThemeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const getThemeMode = (): ThemeMode => {
  const storedTheme = localStorage.getItem('theme');

  if (!storedTheme) return 'LIGHT';
  if (storedTheme !== 'LIGHT' && storedTheme !== 'DARK') return 'LIGHT';

  return storedTheme;
};

const saveTheme = (mode: ThemeMode) => localStorage.setItem('theme', mode);

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>('LIGHT');

  useEffect(() => {
    const mode = getThemeMode();
    setMode(mode);
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'DARK' ? 'LIGHT' : 'DARK';
    setMode(newMode);
    saveTheme(newMode);
  };

  const theme = mode === 'DARK' ? darkTheme : lightTheme;
  const context = { mode, toggleTheme };

  return (
    <ThemeContext.Provider value={context}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('You should use useThemeContext inside a ThemeContextProvider');

  return { ...context };
};
