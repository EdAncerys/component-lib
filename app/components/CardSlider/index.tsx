import { StaticImageData } from 'next/image'
import React, { useState } from 'react'

import leftArrow from '../../assets/icons/arrow-narrow-left.svg'
import rightArrow from '../../assets/icons/arrow-narrow-right.svg'
import {
  Container,
  PreviousButtonImage,
  SliderButton,
  SliderButtons,
  SliderImage,
  SliderCaptionWrapper,
  SliderHeader,
  SliderHeadingText,
  SliderCardsWrapper,
  CardSliderWrapper,
  SliderRatingTextWrapper,
  SliderRatingText,
  SliderRatingWrapper,
} from './styles'
import SingleCard from './SingleCard'
import Rating from './Rating'
import { CardSliderProps } from './interface'

const CardSlider: React.FC<CardSliderProps> = ({
  ratingCount,
  slideImages,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ratingAmount = ratingCount

  const previousSlide = () => {
    const newIndex =
      currentSlide === 0 ? slideImages.length - 1 : currentSlide - 1
    setCurrentSlide(newIndex)
  }

  const nextSlide = () => {
    const newIndex =
      currentSlide === slideImages.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newIndex)
  }

  return (
    <Container>
      <CardSliderWrapper>
        <SliderCaptionWrapper>
          <SliderHeader>
            Our customers that shared there love for Rentables
          </SliderHeader>

          <SliderHeadingText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            usantium dolor
          </SliderHeadingText>

          <SliderRatingWrapper>
            <Rating rating={ratingAmount}></Rating>
            <SliderRatingTextWrapper>
              <SliderRatingText>{ratingAmount} out of 5 stars</SliderRatingText>{' '}
              from 2.7k reviews
            </SliderRatingTextWrapper>
          </SliderRatingWrapper>

          <SliderButtons>
            <SliderButton onClick={previousSlide}>
              <PreviousButtonImage src={leftArrow} alt='previous' />
            </SliderButton>

            <SliderButton onClick={nextSlide}>
              <PreviousButtonImage src={rightArrow} alt='next' />
            </SliderButton>
          </SliderButtons>
        </SliderCaptionWrapper>

        <SliderCardsWrapper>
          <SingleCard
            src={
              slideImages[
                currentSlide === 0 ? slideImages.length - 1 : currentSlide - 1
              ].image
            }
            alt={`Slide ${currentSlide}`}
            className='slider-image'
          />
          <SingleCard
            src={slideImages[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className='slider-image'
          />
          <SingleCard
            src={
              slideImages[
                currentSlide === slideImages.length - 1 ? 0 : currentSlide + 1
              ].image
            }
            alt={`Slide ${currentSlide + 2}`}
            className='slider-image'
          />
        </SliderCardsWrapper>
      </CardSliderWrapper>
    </Container>
  )
}

export default CardSlider
