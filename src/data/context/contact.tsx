import React, { createContext } from 'react'
import { MailReturn } from '@/types'
export interface FormDataProps {
  name: string
  email: string
  subject: string
  content: string
}

export interface ContactContextProps {
  formData: FormDataProps
  loading: boolean
  changeLoading: (loading: boolean) => void
  setFormData: (data: FormDataProps) => void
  sendEmail: (data: FormDataProps) => void
  mailReturnData: MailReturn
  setMailReturnData: (mailReturn: MailReturn) => void
}

export const ContactContext = createContext<ContactContextProps>(
  {} as ContactContextProps,
)

function ContactProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = React.useState<FormDataProps>({} as FormDataProps)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [mailReturn, setMailReturn] = React.useState<MailReturn>(
    {} as MailReturn,
  )

  async function sendEmail(data: FormDataProps) {
    setLoading(true)
    try {
      await fetch('/api/emails', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        console.log('Email sent........')
        setLoading(false)
      })
    } catch (error) {
      console.error('Unable to send email.')
    } finally {
      setLoading(false)
    }
  }

  async function setFormData(data: FormDataProps) {
    setData(data)
  }

  async function changeLoading(loading: boolean) {
    setLoading(loading)
  }

  async function setMailReturnData(mailReturn: MailReturn) {
    setMailReturn(mailReturn)
  }

  return (
    <ContactContext.Provider
      value={{
        mailReturnData: mailReturn,
        setMailReturnData,
        changeLoading,
        formData: data,
        loading,
        sendEmail,

        setFormData,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

function useContact() {
  const context = React.useContext(ContactContext)
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider')
  }
  return context
}

export { ContactProvider, useContact }
