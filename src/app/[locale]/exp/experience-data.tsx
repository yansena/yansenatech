import { ExperienceProps } from './experience-types'

import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiReduxsaga,
  SiNodedotjs,
  SiJest,
  SiStyledcomponents,
  SiTestinglibrary,
  SiRealm,
  SiAxios,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiSwagger,
  SiI18Next,
  SiPhp,
  SiBootstrap,
  SiCodeigniter,
  SiExpo,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { FaCode } from 'react-icons/fa6'

export const experiences: ExperienceProps[] = [
  {
    id: 0,
    title: 'Charrua',
    period: '2023-2024',
    level: `Senior Mobile Developer`,
    description: `Development of an application for the realization of sales, treatment of budgets, maintenance of users within the agribusiness, the application treats their information asynchronously and also stores offline on the device, together with the development of the administrative web application made to support the application, manage more accurately and in detail all the information used and sent by the application.`,
    techs: [
      {
        name: 'React Native',
        icons: TbBrandReactNative,
        color: 'text-[#61DAFB]',
        url: 'https://reactnative.dev/',
      },
      {
        name: 'React JS',
        icons: SiReact,
        color: 'text-purple-500',
        url: 'https://reactjs.org/',
      },

      {
        name: 'Redux',
        icons: SiRedux,
        color: 'text-[#764ABC]',
        url: 'https://redux.js.org/',
      },
      {
        name: 'Redux Saga',
        icons: SiReduxsaga,
        color: 'text-[#999999]',
        url: 'https://redux-saga.js.org/',
      },
      {
        name: 'Tailwind CSS',
        icons: SiTailwindcss,
        color: 'text-[#06B6D4]',
        url: 'https://tailwindcss.com/',
      },
      {
        name: 'Typescript',
        icons: SiTypescript,
        color: 'text-[#3178C6]',
        url: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Javascript',
        icons: SiJavascript,
        color: 'text-[#F7DF1E]',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      },

      {
        name: 'Jest',
        icons: SiJest,
        color: 'text-[#C21325]',
        url: 'https://jestjs.io/pt-BR/',
      },
      {
        name: 'Testing Library',
        icons: SiTestinglibrary,
        color: 'text-red-600',
        url: 'https://testing-library.com/',
      },
      {
        name: 'Axios',
        icons: SiAxios,
        color: 'text-[#5A29E4]',
        url: 'https://axios-http.com/',
      },
      {
        name: 'Node JS',
        icons: SiNodedotjs,
        color: 'text-[#5FA04E]',
        url: 'https://nodejs.org/en/',
      },
      {
        name: 'Nest JS',
        icons: SiNestjs,
        color: 'text-[#E0234E]',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Prisma',
        icons: SiPrisma,
        color: 'text-pink-50',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'PostgreSQL',
        icons: SiPostgresql,
        color: 'text-[#4169E1]',
        url: 'https://www.postgresql.org/',
      },
      {
        name: 'Swagger',
        icons: SiSwagger,
        color: 'text-[#85EA2D]',
        url: 'https://swagger.io/',
      },
    ],
  },
  {
    id: 1,
    title: 'Yandeh',
    period: '2022-2023',
    level: `Middle Mobile Developer`,
    description:
      'Work with a project to comercial area, its a app for a do selling, my responsibility it was create a new features to app, fix buggies, analise code and make her more maintainable, write unit tests and follow the deploy process.',
    techs: [
      {
        name: 'React Native',
        icons: TbBrandReactNative,
        color: 'text-[#61DAFB]',
        url: 'https://reactnative.dev/',
      },
      {
        name: 'Redux',
        icons: SiRedux,
        color: 'text-[#764ABC]',
        url: 'https://redux.js.org/',
      },
      {
        name: 'Redux Saga',
        icons: SiReduxsaga,
        color: 'text-green-300',
        url: 'https://redux-saga.js.org/',
      },

      {
        name: 'Typescript',
        icons: SiTypescript,
        color: 'text-[#3178C6]',
        url: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Javascript',
        icons: SiJavascript,
        color: 'text-[#F7DF1E]',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      },

      {
        name: 'Styled Components',
        icons: SiStyledcomponents,
        color: 'text-pink-200',
        url: 'https://styled-components.com/',
      },
      {
        name: 'Native Base',
        icons: FaCode,
        color: 'text-sky-500',
        url: 'https://nativebase.io/',
      },
      {
        name: 'Jest',
        icons: SiJest,
        color: 'text-[#C21325]',
        url: 'https://jestjs.io/pt-BR/',
      },
      {
        name: 'Testing Library',
        icons: SiTestinglibrary,
        color: 'text-red-600',
        url: 'https://testing-library.com/',
      },
      {
        name: 'Axios',
        icons: SiAxios,
        color: 'text-[#5A29E4]',
        url: 'https://axios-http.com/',
      },
      {
        name: 'RealmDB',
        icons: SiRealm,
        color: 'text-orange-400',
        url: 'https://realm.io/',
      },
      {
        name: 'I18Next',
        icons: SiI18Next,
        color: 'text-[#26A69A]',
        url: 'https://www.i18next.com/',
      },
    ],
  },
  {
    id: 2,
    title: 'Banco do Brasil',
    period: '2021 - 2022',
    level: 'Middle Mobile Developer',
    description:
      'In this Project I work analyzing the mobile application, there has moving for from two native projects, between migration has developed new features and fix bugs, after implementation and tests, does a refactoring in code, before at deploy.',
    techs: [
      {
        name: 'React Native',
        icons: TbBrandReactNative,
        color: 'text-[#61DAFB]',
        url: 'https://reactnative.dev/',
      },
      {
        name: 'Typescript',
        icons: SiTypescript,
        color: 'text-[#3178C6]',
        url: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Javascript',
        icons: SiJavascript,
        color: 'text-[#F7DF1E]',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'Redux',
        icons: SiRedux,
        color: 'text-[#764ABC]',
        url: 'https://redux.js.org/',
      },
      {
        name: 'Redux Saga',
        icons: SiReduxsaga,
        color: 'text-purple-500',
        url: 'https://redux-saga.js.org/',
      },
      {
        name: 'Jest',
        icons: SiJest,
        color: 'text-[#C21325]',
        url: 'https://jestjs.io/pt-BR/',
      },
      {
        name: 'Testing Library',
        icons: SiTestinglibrary,
        color: 'text-red-600',
        url: 'https://testing-library.com/',
      },
      {
        name: 'Axios',
        icons: SiAxios,
        color: 'text-[#5A29E4]',
        url: 'https://axios-http.com/',
      },
      {
        name: 'I18Next',
        icons: SiI18Next,
        color: 'text-[#26A69A]',
        url: 'https://www.i18next.com/',
      },
    ],
  },
  {
    id: 3,
    title: 'Secretaria de Segurança Pública',
    period: '2021 - 2021',
    level: 'Middle Mobile Developer',
    description:
      'This Project has developed a Identidade Funcional for de Minister of Justice and Public Security of Brazil, making new screens based on the project design, creating tests and getting a backend integration, in this project we had a liberty of innovation for use new technologies.',
    techs: [
      {
        name: 'React Native',
        icons: TbBrandReactNative,
        color: 'text-[#61DAFB]',
        url: 'https://reactnative.dev/',
      },
      {
        name: 'Typescript',
        icons: SiTypescript,
        color: 'text-[#3178C6]',
        url: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Javascript',
        icons: SiJavascript,
        color: 'text-[#F7DF1E]',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'Redux',
        icons: SiRedux,
        color: 'text-[#764ABC]',
        url: 'https://redux.js.org/',
      },
      {
        name: 'Axios',
        icons: SiAxios,
        color: 'text-[#5A29E4]',
        url: 'https://axios-http.com/',
      },
    ],
  },
  {
    id: 4,
    title: 'STG Saúde',
    period: '2020 - 2021',
    level: 'Junior Mobile Developer',
    description:
      'In this one I needed to make plannings for applications if I had to develop, selecting used technologies, I contact designers for explain the project’s idea, or send a tiny model made in Figma, after this, it’s done the development and implementation of the features planed, together analyzing and fixing bugs.',
    techs: [
      {
        name: 'React Native',
        icons: TbBrandReactNative,
        color: 'text-[#61DAFB]',
        url: 'https://reactnative.dev/',
      },
      {
        name: 'Expo',
        icons: SiExpo,
        color: 'text-[#000020]',
        url: 'https://expo.dev/',
      },
      {
        name: 'Typescript',
        icons: SiTypescript,
        color: 'text-[#3178C6]',
        url: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Javascript',
        icons: SiJavascript,
        color: 'text-[#F7DF1E]',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'Axios',
        icons: SiAxios,
        color: 'text-[#5A29E4]',
        url: 'https://axios-http.com/',
      },
      {
        name: 'PHP 5.4',
        icons: SiPhp,
        color: 'text-[#777BB4]',
        url: 'https://www.php.net/',
      },
      {
        name: 'Codeigniter',
        icons: SiCodeigniter,
        color: 'text-[#EF4223]',
        url: 'https://codeigniter.com/',
      },
      {
        name: 'PostgreSQL',
        icons: SiPostgresql,
        color: 'text-[#4169E1]',
        url: 'https://www.postgresql.org/',
      },
      {
        name: 'Bootstrap',
        icons: SiBootstrap,
        color: 'text-[#7952B3]',
        url: 'https://getbootstrap.com/',
      },
    ],
  },
]
