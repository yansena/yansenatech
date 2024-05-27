'use client'

import { ExperienceProps } from './experience-types'
import Image from 'next/image'
import { useState } from 'react'
import {
  FiChevronRight,
  FiCornerRightDown,
  FiTerminal,
  FiCoffee,
} from 'react-icons/fi'

import { experiences } from './experience-data'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

function Exp() {
  const [selectedPosition, setSelectedPosition] =
    useState<ExperienceProps | null>(null)

  const t = useTranslations('Experiences')

  function renderExperience(exp: ExperienceProps) {
    if (exp.title === selectedPosition?.title) {
      return setSelectedPosition(null)
    }
    setSelectedPosition(exp)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  }

  return (
    <div className="flex flex-1 flex-row justify-evenly rounded-lg bg-gray-500/5 p-8 backdrop-blur-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 0.5 }}
      >
        <Image
          src={'/projects.svg'}
          width={100}
          height={100}
          alt="Experience Image"
          className="h-[28rem] w-[28rem] sm:w-[25rem] md:w-[40rem]"
        />
      </motion.div>
      <div className="ml-10 w-[70vh] text-purple-50">
        <motion.div
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
          className=" mb-4  flex flex-row items-center justify-center"
        >
          <h1 className="text-2xl font-bold">{t('subTitle')}</h1>
          <FiCoffee className="ml-2 text-2xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 1, delay: 0.5 }}
          className="flex flex-col"
        >
          {experiences.map((experience) => {
            return (
              <button
                key={experience.id}
                className={`flex flex-row items-center text-start text-xl hover:text-gray-400 ${selectedPosition?.title === experience.title ? 'font-semibold text-indigo-500 hover:text-indigo-400' : 'text-purple-50'}`}
                onClick={() => renderExperience(experience)}
              >
                <FiChevronRight
                  className={`${selectedPosition?.title === experience.title ? 'text-indigo-600' : 'text-purple-50'} 'text-xl'`}
                />
                {experience.title}
              </button>
            )
          })}
        </motion.div>
        <div className="flex w-full justify-end">
          {selectedPosition !== null && (
            <FiCornerRightDown className="text-4xl" />
          )}
        </div>
        <>
          {selectedPosition && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              variants={container}
            >
              <div className="mb-2 flex flex-row items-center">
                <h2 className="flex flex-row items-center text-xl font-semibold">
                  <FiTerminal className="mr-2" />
                  {t(`${selectedPosition.title}.jobTitle`)}
                </h2>
                <h3 className="ml-4 text-xl font-semibold">
                  {t(`${selectedPosition.title}.jobPeriod`)}
                </h3>
              </div>
              <p className="text-justify">
                {t(`${selectedPosition.title}.jobDescription`)}
              </p>
            </motion.div>
          )}
          <>
            {selectedPosition && (
              <div className="my-4">
                <h1 className="text-lg font-bold">{t('techTitle')}:</h1>
              </div>
            )}

            <div className="grid grid-cols-5 gap-4">
              {selectedPosition &&
                selectedPosition.techs.map((tech, index) => {
                  return (
                    <motion.a
                      href={
                        tech.url
                          ? tech.url
                          : `http://www.google.com?search=${tech.name}`
                      }
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      key={index}
                      className="flex flex-col items-center justify-center rounded-lg bg-slate-700/30 p-4 text-purple-50"
                    >
                      <tech.icons className={`${tech.color} mb-2 text-5xl`} />
                      <p className="text-center">{tech.name}</p>
                    </motion.a>
                  )
                })}
            </div>
          </>
        </>
      </div>
    </div>
  )
}

export default Exp
