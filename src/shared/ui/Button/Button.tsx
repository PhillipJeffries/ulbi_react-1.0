import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.modules.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props

  return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
  )
}
