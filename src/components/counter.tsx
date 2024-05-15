import React, {useState} from "react";
import './counter.scss';

export const Counter = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value+1)
    }

    const decrement = () => {
        value === 0 ? null :
        setValue(value-1)
    }

    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <span>{value}</span>
            <button onClick={increment}>+</button>
        </div>
    )
};