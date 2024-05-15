import { type ReactNode, useState } from 'react'

import classes from './Counter.modules.scss'
import './counter.scss'

export const Counter = (): ReactNode => {
  const [value, setValue] = useState(0)

  const increment = (): void => {
    setValue(value + 1)
  }

  const decrement = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    value === 0
      ? null
      : setValue(value - 1)
  }

  return (
        <div className="counter">
            <button className={classes.btn} onClick={decrement}>-</button>
            <span>{value}</span>
            <button onClick={increment}>+</button>
        </div>
  )
}
