import { StaticImageData } from 'next/image'

export interface CardProps {
  imageSrc?: StaticImageData
  height?: number
  width?: number
  className?: string
  children?: string
  cardPrice?: string
  distance?: string
  rating?: string | number
  ratingCount?: string | number
}
