import { render } from '@testing-library/preact'
import { useAuth } from '../src/lib/hooks'
import { AuthProvider } from '../src/auth-context'

describe('Custom Hook Auth', () => {
  it('should useAuth must be used within an AuthProvider', () => {
    const message = 'useAuth must be used within an AuthProvider'
    const TestComponent = () => {
      useAuth()
      return <small>Component test</small>
    }

    expect(() => render(<TestComponent />)).toThrow(message)
  })

  it('There should be no error when using the hook in the context', () => {
    const TestComponet = () => {
      useAuth()
      return <small>render hook</small>
    }
    const dom = render(
      <AuthProvider>
        <TestComponet />
      </AuthProvider>,
    )

    expect(dom.getByText(/render hook/)).toBeTruthy()
  })
})
