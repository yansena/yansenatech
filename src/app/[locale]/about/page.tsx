import { useTranslations } from 'next-intl'
import Image from 'next/image'

function About() {
  const t = useTranslations('About')
  return (
    <div className="rounded-lg bg-gray-500/5 p-8 backdrop-blur-3xl">
      <section className="mb-32 flex flex-row">
        <div className="flex flex-col">
          <h1 className="mb-2 text-xl font-bold text-purple-100">
            {t('aboutTitle')}
          </h1>
          <p className="mb-10 max-w-[730px] text-justify text-sm text-purple-100 md:text-lg">
            {t('mainAbout')}
          </p>
          <h1 className="mb-2 text-xl font-bold text-purple-100">Tech.me</h1>
          <p className="mb-10 max-w-[730px] text-justify text-sm text-purple-100 md:text-lg">
            {t('aboutTech')}
            <br />
            {t('aboutSubTech')}
          </p>
        </div>
        <div>
          <Image
            src={'/programming.svg'}
            width={100}
            height={100}
            alt="programing image"
            className="w-[0rem] sm:w-[25rem] md:w-[45rem]"
          />
        </div>
      </section>
    </div>
  )
}

export default About
