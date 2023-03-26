import { StaticImageData } from 'next/image'

export interface CardSliderProps {
  ratingCount: number
  slideImages: SlideImageInterface[]
}

export interface SlideImageInterface {
  id: number
  image: StaticImageData
  userName: string
  textTitle: string
  description: string
}

export interface SingleCard {
  slideNo?: number
  src?: StaticImageData
  alt?: string
  userName?: string
  textTitle?: string
  description?: string
  className?: string
}
