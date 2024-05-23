import { useTranslations } from 'next-intl'
import Image from 'next/image'

function About() {
  const t = useTranslations('About')
  return (
    <div className="rounded-lg bg-gray-500/5 p-8 backdrop-blur-3xl">
      <section className="mb-32 flex flex-row">
        <div className="flex flex-col">
          <h1 className="mb-2 text-xl font-bold text-purple-100">
            {t('title')}
          </h1>
          <p className="mb-10 max-w-[730px] text-justify text-sm text-purple-100 md:text-lg">
            Meu nome é Yanderson, mas meus amigos me chamam de Yan, eu digo que
            sou nascido na tecnologia, porque quando eu tinha sete anos meu pai
            começou a trabalhar com TI, desde esse primeiro contato, eu me
            mantenho próximo da tecnologia e animado com o futuro de tudo isso,
            depois de muito tempo fazendo manutencao em computadores, decidi
            estudar desenvolvimento de software, ir para a faculdade, pouco
            tempo depois de estar cursando já estava apaixonado por
            desenvolvimento e as possibilidades da tecnologia.
          </p>
          <h1 className="mb-2 text-xl font-bold text-purple-100">Tech.me</h1>
          <p className="mb-10 max-w-[730px] text-justify text-sm text-purple-100 md:text-lg">
            Atualmente eu atuo como Full Stack Engenieer, contabilizando 5 anos
            usando a stack Javascript com minha ferramente atual de
            desenvolvimento. <br />
            Sou Especializado em React eviropment, tanto web quanto mobile.
            <br />
            Porem já trabalhei com Angular, Python, PHP e Node;
          </p>
        </div>
        <div>
          <Image
            src={'/programming.svg'}
            width={100}
            height={100}
            alt="about"
            className="w-[0rem] sm:w-[25rem] md:w-[45rem]"
          />
        </div>
      </section>
    </div>
  )
}

export default About
