import './styles/index.scss'

import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, type ReactNode } from 'react'

export const App = (): ReactNode => {
  const { theme } = useTheme()

  if (theme === undefined) {
    throw new Error('Can\'t get theme')
  }

  return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="page-content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
  )
}
