import { render, fireEvent } from '@testing-library/preact'
import LoginPage from '../src/routes/sing-in'

describe('Testing for page Login', () => {
  it('should get value input email', () => {
    const dom = render(<LoginPage />)
    const input = dom.getByPlaceholderText(
      'jhondoe@gmail.com',
    ) as HTMLInputElement

    fireEvent.change(input, {
      target: {
        value: 'test@email.com',
      },
    })

    expect(input.value).toBe('test@email.com')
    expect(input.value).toBeDefined()
    expect(input.value).not.toBeUndefined()
  })

  it('should get value input password', () => {
    const dom = render(<LoginPage />)
    const input = dom.getByPlaceholderText('*********') as HTMLInputElement

    fireEvent.change(input, {
      target: {
        value: '123456',
      },
    })

    expect(input.value).toBe('123456')
    expect(input.value).not.toBe('123')
    expect(input.value.length).toBe(6)
  })

  it('should submit form', () => {
    const dom = render(<LoginPage />)

    const form = dom.getByRole('form') as HTMLFormElement

    fireEvent.submit(form)

    const inputEmail = form[0] as HTMLInputElement
    const inputPassword = form[1] as HTMLInputElement

    expect(inputEmail.required).toBeTruthy()
    expect(inputPassword.required).toBeTruthy()
  })
})
