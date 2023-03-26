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

const SingleCard = ({ src, alt }: SingleCard) => {
  return (
    <SliderWrapper>
      <SliderText>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem usantium
        dolor ed ut perspiciatis unde omnis iste{' '}
        <SliderName>Amanda Cooper</SliderName>
        <SliderDesignation>Director at Slack Inc.</SliderDesignation>
      </SliderText>
      <SliderImage src={src} alt={alt} className='slider-image' />
    </SliderWrapper>
  )
}

export default SingleCard
