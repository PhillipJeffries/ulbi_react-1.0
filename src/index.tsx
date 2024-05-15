import { someFn } from "./test";
import { render } from "react-dom";
import { App } from "./App";
import './index.scss';

someFn()

render(
    <App/>,
    document.getElementById('root')
)