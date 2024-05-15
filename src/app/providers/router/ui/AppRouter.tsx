import { Suspense, type ReactNode } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = (): ReactNode => {
  return (
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<div>Loadind...</div>}>
                                <div className='page-wrapper'>
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>

  )
}

export default AppRouter
