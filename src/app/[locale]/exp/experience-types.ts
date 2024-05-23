import { IconType } from 'react-icons'

export interface TechsProps {
  name: string
  icons: IconType
  color: string
  url?: string
}

export interface ExperienceProps {
  id: number
  period: string
  title: string
  level: string
  description: string
  techs: TechsProps[]
}
