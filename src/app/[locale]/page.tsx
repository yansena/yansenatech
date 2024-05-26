'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { DetailCard } from '@/components/molecules'
import { BsPersonBadge, BsStack } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <motion.div className="rounded-lg bg-gray-500/5 p-8 backdrop-blur-3xl">
      <section className="mb-32 flex flex-row">
        <div className="relative flex flex-col sm:mb-60">
          <motion.div
            whileHover={{ scale: 1.2, x: 50 }}
            whileTap={{ scale: 1.1 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1
              onClick={() => {}}
              className="mb-8 text-3xl font-bold text-slate-400 sm:text-4xl md:text-5xl"
              data-testid="home-title"
            >
              {t('introduce')} <br />
              <strong className="font-bold text-gray-100"> {t('name')}</strong>
            </h1>
          </motion.div>
          <motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-10 max-w-[730px] text-justify text-sm text-purple-100 md:text-lg"
              title="descriptions"
            >
              {t('shortDescription')} <br />
              {t('focusDescription')}
            </motion.p>
          </motion.div>

          <motion.a
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            href="/contact"
            className=" flex w-auto flex-row items-center justify-center rounded-lg border-gray-400/20 bg-slate-500/30 p-4"
          >
            <strong className="text-bold text-purple-100">
              {t('buttonTitle')}
            </strong>
          </motion.a>
        </div>
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 2, velocity: 2 }}
        >
          <Image
            src={'/home-coding.svg'}
            width={100}
            height={100}
            alt="home coding"
            className="w-[0rem] sm:w-[25rem] md:w-[45rem]"
          />
        </motion.div>
      </section>

      <section className="mb-24 grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-1 md:grid-cols-2">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <DetailCard
            description={t('cardAboutDesciption')}
            title={t('cardAboutTitle')}
            href="/about"
          >
            <BsPersonBadge className="mb-auto text-9xl text-purple-100" />
          </DetailCard>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <DetailCard
            description={t('cardExpDesciption')}
            title={t('cardExpTitle')}
            href="/exp"
          >
            <BsStack className="mb-auto text-9xl text-purple-100" />
          </DetailCard>
        </motion.div>
      </section>
    </motion.div>
  )
}
