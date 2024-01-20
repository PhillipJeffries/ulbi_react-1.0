import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTheme, Theme } from 'app/providers/ThemeProvider'
import Sun from 'shared/assets/icons/sun.svg'
import Moon from 'shared/assets/icons/moon.svg'
import { type ReactNode } from 'react'

interface ThemeSwitherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitherProps): ReactNode => {
  const { theme, toggleTheme } = useTheme()

  return (
        <div>
            <Button
                onClick={toggleTheme}
                theme={ThemeButton.CLEAR}
            >
                {theme === Theme.DARK ? <Moon/> : <Sun/>}
            </Button>
        </div>
  )
}
