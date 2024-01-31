import { type ReactNode, useState, FC, useRef, useContext, useEffect } from 'react'

import {ScrollContext} from '../../pages/TestPage/ui/TestPage'

import cls from './TestComponent.modules.scss'
import './testComponent.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import Sun from 'shared/assets/icons/sun.svg'

interface TestProps {
  className?: string
}


export const TestComponent: FC<TestProps>  = (props: TestProps)=> {


const scrollContext = useContext(ScrollContext)


  const {scrollValue, setScrollValue} = scrollContext;

  console.log(scrollValue)


  const scrollRef = useRef(null)
  console.log(scrollRef)
  const {className} = props

  const arr = [1,2,3,4,5,6,7,8,9,10];

  console.log(scrollRef);

  useEffect(() => {
    if (scrollRef.current) {
      // @ts-ignore:next-line
      scrollRef.current.scrollLeft = scrollValue
    }
  }, [scrollValue])
  

  return (
        <div onScroll={e => {setScrollValue(e.currentTarget.scrollLeft)}} ref={scrollRef} className={classNames(cls.testComponent, {}, [className!])}>
            {arr.map(ic => {
              return (
                <div className={cls.Item}>
                  <Sun/>
                </div>
              )
            })}
        </div>
  )
}
