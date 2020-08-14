import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main rockets={[{ id: 'rocket' }]} />)

    expect(
      screen.getByRole('heading', { name: /SpaceX Rockets/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main rockets={[{ id: 'rocket' }]} />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
