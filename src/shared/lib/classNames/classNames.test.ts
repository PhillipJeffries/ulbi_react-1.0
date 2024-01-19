import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('smc')).toBe('smc')
  })

  test('with additional class', () => {
    expect(classNames('smc', {}, ['p', 's'])).toBe('smc p s')
  })

  test('with mods', () => {
    const expected = 'smc p s hovered scrollable'
    expect(classNames('smc', { hovered: true, scrollable: true }, ['p', 's'])).toBe(expected)
  })

  test('with mods false', () => {
    const expected = 'smc p s hovered'
    expect(classNames('smc', { hovered: true, scrollable: false }, ['p', 's'])).toBe(expected)
  })
})
