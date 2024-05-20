import {render, screen} from "@testing-library/react"
import {Sidebar} from "./Sidebar";

describe('button', () => {
  test('button', () => {
    render(<Sidebar/>)
    // expect(screen.getByText('test')).toBeInTheDocument()
    screen.debug()
  })
})
