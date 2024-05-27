'use client'

import { createContext } from 'react'
import { ContactProvider } from '@/data/context/contact'

export const ContactContext = createContext({})

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ContactProvider>{children}</ContactProvider>
}
