import { type FC } from 'react'
import cls from './AppLink.modules.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className = '',
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
        <Link to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </Link>
  )
}
