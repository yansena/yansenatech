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

function Exp() {
  const [selectedPosition, setSelectedPosition] =
    useState<ExperienceProps | null>(null)

  function renderExperience(exp: ExperienceProps) {
    if (exp.title === selectedPosition?.title) {
      return setSelectedPosition(null)
    }
    setSelectedPosition(exp)
  }

  return (
    <div className="flex flex-1 flex-row justify-evenly rounded-lg bg-gray-500/5 p-8 backdrop-blur-3xl">
      <div>
        <Image
          src={'/projects.svg'}
          width={100}
          height={100}
          alt="Experience Image"
          className="h-[28rem] w-[28rem] sm:w-[25rem] md:w-[40rem]"
        />
      </div>
      <div className="ml-10 w-[70vh] text-purple-50">
        <div className=" mb-4  flex flex-row items-center justify-center">
          <h1 className="text-2xl font-bold">Experiencias.me</h1>
          <FiCoffee className="ml-2 text-2xl" />
        </div>
        <div className="flex flex-col">
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
        </div>
        <div className="flex w-full justify-end">
          {selectedPosition !== null && (
            <FiCornerRightDown className="text-4xl" />
          )}
        </div>
        <>
          {experiences.map((exp) => {
            if (exp.title === selectedPosition?.title) {
              return (
                <>
                  <div key={exp.id}>
                    <div>
                      <h2 className="flex flex-row items-center">
                        <FiTerminal className="mr-2" />
                        {exp.level}
                      </h2>
                      <h3>{exp.period}</h3>
                    </div>
                    <p className="text-justify">{exp.description}</p>
                  </div>
                </>
              )
            }
            return null
          })}
          <>
            {selectedPosition && (
              <div className="my-4">
                <h1 className="text-lg font-bold">Technologias:</h1>
              </div>
            )}

            <div className="grid grid-cols-5 gap-4">
              {selectedPosition &&
                selectedPosition.techs.map((tech, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center rounded-lg bg-slate-700/30 p-4 text-purple-50"
                    >
                      <tech.icons className={`${tech.color} mb-2 text-5xl`} />
                      <p className="text-center">{tech.name}</p>
                    </div>
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
