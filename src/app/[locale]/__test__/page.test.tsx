import { beforeEach, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../page'
import '@testing-library/jest-dom'

vi.mock('next-intl', () => ({
  useTranslations: vi.fn().mockReturnValue((key: string) => key),
}))

describe('Home page', () => {
  // const push = vi.fn()
  beforeEach(() => {
    render(<Page />)
  })

  // test('renders the home title', () => {
  //   expect(app).('home-title')).toBeInTheDocument()
  // })

  test('matches snapshot', () => {
    expect(screen).toMatchSnapshot()
  })

  test('renders the introduction text correctly', async () => {
    // const app =
    expect(screen.getByText(/introduce/i)).toBeInTheDocument()
    expect(screen.getByText(/name/i)).toBeInTheDocument()
  })

  test('renders the describes', () => {
    expect(screen.getByTitle('descriptions')).toBeInTheDocument()
    // expect(screen.getByText('focusDescription')).toBeInTheDocument()
  })

  test('renders the contact button with correct text', () => {
    expect(screen.getByText(/buttonTitle/i)).toBeInTheDocument()
  })

  test('renders the DetailCards with correct text', () => {
    expect(screen.getByText(/cardAboutTitle/i)).toBeInTheDocument()
    expect(screen.getByText(/cardAboutDesciption/i)).toBeInTheDocument()
    expect(screen.getByText(/cardExpTitle/i)).toBeInTheDocument()
    expect(screen.getByText(/cardExpDesciption/i)).toBeInTheDocument()
  })

  test('redirects to contact page when the contact button is clicked', () => {
    const contactLink = screen.getByRole('link', { name: /buttonTitle/i })
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).toHaveAttribute('href', '/contact')
  })
})
