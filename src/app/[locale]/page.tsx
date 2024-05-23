import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { DetailCard } from '@/components/molecules'
import { BsPersonBadge, BsStack } from 'react-icons/bs'

export default function Home() {
  const t = useTranslations('Home')
  return (
    <div className="rounded-lg bg-gray-500/5 p-8 backdrop-blur-3xl">
      <section className="mb-32 flex flex-row">
        <div className="relative flex flex-col sm:mb-60">
          <h1 className="mb-8 text-3xl font-bold text-slate-400 sm:text-4xl md:text-5xl">
            {t('introduce')} <br />
            <strong className="font-bold text-gray-100"> {t('name')}</strong>
          </h1>

          <p className="mb-10 max-w-[730px] text-justify text-sm text-purple-100 md:text-lg">
            {t('shortDescription')} <br />
            {t('focusDescription')}
          </p>
          <a
            href="/contact"
            className=" flex w-auto flex-row items-center justify-center rounded-lg border-gray-400/20 bg-slate-500/30 p-4"
          >
            <strong className="text-bold text-purple-100">
              {t('buttonTitle')}
            </strong>
          </a>
        </div>
        <Image
          src={'/home-coding.svg'}
          width={100}
          height={100}
          alt="home coding"
          className="w-[0rem] sm:w-[25rem] md:w-[45rem]"
        />
      </section>

      <section className="mb-24 grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-1 md:grid-cols-2">
        <DetailCard
          description={t('cardAboutDesciption')}
          title={t('cardAboutTitle')}
          href="/about"
        >
          <BsPersonBadge className="mb-auto text-9xl text-purple-100" />
        </DetailCard>

        <DetailCard
          description={t('cardExpDesciption')}
          title={t('cardExpTitle')}
          href="/exp"
        >
          <BsStack className="mb-auto text-9xl text-purple-100" />
        </DetailCard>
        <div></div>
      </section>
    </div>
  )
}
