import { type Root, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './app/styles/index.scss'

import { App } from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const rootElement = document.getElementById('root')

if (rootElement == null) {
  throw new Error('No root element')
}

const root: Root = createRoot(rootElement)

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
