import { StaticImageData } from 'next/image'

export interface CardSliderProps {
  ratingCount: number
  slideImages: SlideImageInterface[]
}

export interface SlideImageInterface {
  id: number
  image: StaticImageData
}

export interface SingleCard {
  src: StaticImageData
  alt: string
  className: string
}
