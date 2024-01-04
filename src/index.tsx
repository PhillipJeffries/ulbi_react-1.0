import { someFn } from "./test";
import { render } from "react-dom";
import {Counter} from "./components/counter";

someFn()

render(
    <div>hello<Counter/></div>,
    document.getElementById('root')
)