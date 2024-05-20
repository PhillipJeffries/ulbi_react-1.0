import {render, screen} from "@testing-library/react"
import {Button} from "./Button"

describe('button', () => {
  test('button', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
    screen.debug()
  })
})
