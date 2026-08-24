import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'dark' | 'light' | 'blueprint';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme') as ThemeMode;
      if (saved && ['dark', 'light', 'blueprint'].includes(saved)) {
        return saved;
      }
    }
    return 'dark';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('blueprint');
    else if (theme === 'blueprint') setTheme('light');
    else setTheme('dark');
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-dark', 'theme-light', 'theme-blueprint');
    root.classList.add(`theme-${theme}`);
    
    if (theme === 'light') {
      root.classList.remove('dark');
      document.body.className = 'bg-slate-50 text-slate-900 antialiased selection:bg-cyan-500/30 selection:text-cyan-900';
    } else if (theme === 'blueprint') {
      root.classList.add('dark');
      document.body.className = 'bg-[#091833] text-cyan-100 antialiased selection:bg-cyan-400/30 selection:text-white';
    } else {
      root.classList.add('dark');
      document.body.className = 'bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300';
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
