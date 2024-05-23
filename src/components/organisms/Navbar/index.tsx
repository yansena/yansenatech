'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { twMerge } from 'tailwind-merge'
import LocaleSwitcher from '@/components/molecules/LocaleSwitcher'
import { useTranslations } from 'next-intl'

function Navbar() {
  const path = usePathname()
  const t = useTranslations()

  const NAV_LINKS = [
    { label: t('Home.title'), href: '/' },
    { label: t('About.title'), href: '/about' },
    { label: t('Experience.title'), href: '/exp' },
    { label: t('Contact.title'), href: '/contact' },
  ]

  return (
    <>
      <header className="max-w-limit fixed  flex w-full items-center justify-center p-7">
        <div className="flex w-full flex-1 flex-row items-center justify-between gap-4 rounded-xl border border-gray-700/20 bg-gray-700/30 p-4  shadow-md backdrop-blur-lg">
          <div className="flex flex-1 items-center">
            <ul
              className="flex flex-1 justify-evenly gap-10 sm:items-center sm:justify-start"
              data-cy="header-navigation"
            >
              <Link href="/">
                <Image
                  src={'/Logo.svg'}
                  width={50}
                  height={50}
                  priority
                  alt="Logo Yan Sena"
                  className="h-auto w-[8vh] hover:brightness-90"
                />
              </Link>
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = path === href
                return (
                  <li key={href}>
                    <Link
                      className={twMerge(
                        'text-base font-medium',
                        isActive
                          ? 'font-semibold text-indigo-50'
                          : 'text-gray-500',
                        'sm:hover:text-light-gray/80',
                      )}
                      href={href}
                    >
                      <span className="hidden sm:flex">{label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex flex-row items-center gap-4">
            <a
              href="https://github.com/yansena"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/yanderson-sena/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="text-white" />
            </a>
            <LocaleSwitcher />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
