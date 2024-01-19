import { Suspense, type ReactNode } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = (): ReactNode => {
  return (
        <div className="page-wrapper">
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>

  )
}

export default AppRouter
