import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './styles/index.scss';

import { App } from "./App";
import ThemeProvider from './theme/ThemeProvider';

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)