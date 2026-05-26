import React, { useState, useEffect } from 'react';
import { Sun, Moon, SunMoon } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    // Initialize theme from localStorage after component mounts
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const cycleTheme = (): void => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentThemeIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  const ThemeIcon: React.FC = () => {
    if (theme === 'light') return <Sun size={20} />;
    if (theme === 'dark') return <Moon size={20} />;
    return <SunMoon size={20} />;
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
      className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <ThemeIcon />
    </button>
  );
};

export default ThemeSwitcher;