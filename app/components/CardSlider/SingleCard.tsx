import { StaticImageData } from 'next/image'
import React from 'react'
import { SingleCard } from './interface'
import {
  SliderDesignation,
  SliderImage,
  SliderName,
  SliderText,
  SliderWrapper,
} from './styles'

const SingleCard = ({
  slideNo,
  src,
  alt,
  userName = 'Amanda Cooper',
  textTitle,
  description,
  className,
}: SingleCard) => {
  return (
    <SliderWrapper>
      <SliderText>
        {description}
        <SliderName>{userName}</SliderName>
        <SliderDesignation>{textTitle}</SliderDesignation>
      </SliderText>
      <SliderImage src={src} alt={alt} className='slider-image' />
    </SliderWrapper>
  )
}

export default SingleCard
