import { type RouteProps } from 'react-router-dom'
import { HomePage } from 'pages/HomePage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import {TestPage} from 'pages/TestPage'


export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  TEST = 'test'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.TEST]: '/test',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage/>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage/>
  },
  [AppRoutes.TEST]: {
    path: RoutePath.test,
    element: <TestPage/>
  }
}
