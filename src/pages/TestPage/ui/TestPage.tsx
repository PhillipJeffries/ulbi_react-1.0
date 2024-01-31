import { TestComponent } from 'components/testComponent/TestComponent'
import { type ReactNode, createContext, FC, useState } from 'react'


export interface ScrollContextProps {
  scrollValue: number
  setScrollValue: (scroll: number) => void
}

export const ScrollContext = createContext<ScrollContextProps>({
  scrollValue: 0,
  setScrollValue: function (scroll: number): void {
    throw new Error('Function not implemented.')
  }
})


const ScrollProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [scrollValue, setScrollValue] = useState<number>(0)

  return (
        <ScrollContext.Provider value={{scrollValue, setScrollValue}}>
            {children}
        </ScrollContext.Provider>
  )
}



const TestPage = (): ReactNode => {
  return (
        <div>
            <h1>Test</h1>
            <ScrollProvider>
              <TestComponent />
              <TestComponent />
            </ScrollProvider>
        </div>
  )
}

export default TestPage
