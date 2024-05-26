import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import DetailCard from '../index'
import { vi } from 'vitest'

vi.mock('next/link', () => {
  // eslint-disable-next-line react/display-name
  return {
    __esModule: true,
    default: ({
      children,
      href,
    }: {
      children: React.ReactNode
      href: string
    }) => <a href={href}>{children}</a>,
  }
})

describe('DetailCard', () => {
  const title = 'Test title'
  const description = 'Test description'
  const href = '/test'

  beforeEach(() => {
    render(
      <DetailCard title={title} description={description} href={href}>
        <div>Child Element</div>
      </DetailCard>,
    )
  })

  test('renders the title', () => {
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  test('renders the description correctly', () => {
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  test('renders the link with the correct href', () => {
    const linkElement = screen.getByRole('link', { name: /Test Title/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', href)
  })

  test('renders the children correctly', () => {
    expect(screen.getByText('Child Element')).toBeInTheDocument()
  })
})
