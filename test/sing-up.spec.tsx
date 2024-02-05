import { fireEvent, render } from '@testing-library/preact'
import RegisterPage from '../src/routes/sing-up'

describe('test for page register', () => {
  it('should return value input email', () => {
    const dom = render(<RegisterPage />)

    const inputEmail = dom.getByPlaceholderText(
      /jhondoe@gmail.com/,
    ) as HTMLInputElement

    fireEvent.change(inputEmail, { target: { value: 'jhondoe@gmail.com' } })

    expect(inputEmail.value).toBe('jhondoe@gmail.com')
    expect(inputEmail.value).not.toBe('')
    expect(inputEmail.value).include('@')
  })

  it('should returns value input password', () => {
    const dom = render(<RegisterPage />)
    const input = dom.getByPlaceholderText('*********') as HTMLInputElement

    fireEvent.change(input, {
      target: {
        value: '123456',
      },
    })

    expect(input.value).toBe('123456')
    expect(input.value).not.toBe('123')
    expect(input.value).not.toBe('')
    expect(input.value.length).toBe(6)
  })
})
