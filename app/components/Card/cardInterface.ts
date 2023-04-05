import { StaticImageData } from 'next/image'

export interface CardProps {
  handleCardClick?: () => void
  imageSrc?: StaticImageData
  height?: number
  width?: number
  children?: string
  cardPrice?: string
  PriceDividedBy?: string
  distance?: string
  rating?: string | number
  ratingCount?: string | number
}
