// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const getTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkTheme(savedTheme === 'dark');
      }
    };
    getTheme();
  }, []);

  const toggleTheme = async () => {
    setIsDarkTheme(!isDarkTheme);
    await AsyncStorage.setItem('theme', !isDarkTheme ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
