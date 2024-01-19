import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme | undefined
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  if (setTheme === undefined) {
    throw new Error('It has been happend')
  }

  const toggleTheme = (): void => {
    // theme === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT)
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
  return {
    theme,
    toggleTheme
  }
}
