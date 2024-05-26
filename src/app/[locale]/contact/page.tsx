'use client'

import { Mail } from '@/components/organisms'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

function Contact() {
  const t = useTranslations('Contact')
  return (
    <div className="flex flex-1 flex-col justify-evenly rounded-lg bg-gray-500/5 p-8 backdrop-blur-3xl">
      <motion.div
        className="w-ful mb-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-2xl font-semibold text-indigo-50">
          {t('subtitle')}
        </h1>
        <h2 className="text text-lg tracking-widest text-indigo-50">
          {t('describe')}
        </h2>
      </motion.div>
      <Mail />
    </div>
  )
}

export default Contact
