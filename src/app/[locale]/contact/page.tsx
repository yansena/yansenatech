import { Mail } from '@/components/organisms'
import { useTranslations } from 'next-intl'

function Contact() {
  const t = useTranslations('Contact')
  return (
    <div className="flex flex-1 flex-col justify-evenly rounded-lg bg-gray-500/5 p-8 backdrop-blur-3xl">
      <div className="w-ful mb-6">
        <h1 className="text-2xl font-semibold text-indigo-50">
          {t('subtitle')}
        </h1>
        <h2 className="text text-lg tracking-widest text-indigo-50">
          {t('describe')}
        </h2>
      </div>
      <Mail />
    </div>
  )
}

export default Contact
