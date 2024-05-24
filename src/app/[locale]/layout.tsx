import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getLocale } from 'next-intl/server'
// import { QueryClient, QueryClientProvider } from 'react-query'

import { Navbar } from '@/components/organisms'
import './globals.css'

const popins = Poppins({
  weight: ['100', '400', '600', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yanderson Sena',
  description: 'Your tech guy',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()
  const locale = await getLocale()
  // const queryClient = new QueryClient()

  return (
    <html lang={locale}>
      <body
        className={`${popins.className} min-h relative flex flex-col items-center overflow-x-hidden bg-gray-900  antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* <QueryClientProvider client={queryClient}> */}
          <Image
            src={'/wallpaper.png'}
            alt="backgroud image"
            className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full object-cover"
            width={100}
            height={100}
          />

          <div className="max-w-limit flex w-full flex-col px-4 pb-32 pt-24 sm:pt-48 ">
            <main className="flex-grow">{children}</main>
          </div>
          <Navbar />
          {/* </QueryClientProvider> */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
