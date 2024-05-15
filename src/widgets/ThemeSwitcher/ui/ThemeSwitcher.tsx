import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./ThemeSwitcher.modules.scss"
import { useTheme, Theme } from "app/providers/ThemeProvider";
import Sun from "shared/assets/icons/sun.svg";
import Moon from "shared/assets/icons/moon.svg";


interface ThemeSwitherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitherProps) => {
    const { theme, toggleTheme } = useTheme();

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