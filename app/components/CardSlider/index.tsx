import React, { useState } from 'react'
import leftArrow from '../../assets/icons/arrow-narrow-left.svg'
import rightArrow from '../../assets/icons/arrow-narrow-right.svg'
import {
  Container,
  SliderButton,
  SliderButtons,
  SliderCaptionWrapper,
  SliderHeader,
  SliderHeadingText,
  SliderCardsWrapper,
  CardSliderWrapper,
  SliderRatingTextWrapper,
  SliderRatingText,
  SliderRatingWrapper,
  SliderControlImage,
} from './styles'
import SingleCard from './SingleCard'
import Rating from './Rating'
import { CardSliderProps } from './interface'

const CardSlider: React.FC<CardSliderProps> = ({
  ratingCount,
  slideImages,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cardSliderImages, setCardSliderImages] = useState(slideImages)
  const ratingAmount = ratingCount

  const previousSlide = () => {
    const rotatedImages = [
      cardSliderImages[cardSliderImages.length - 1],
      ...cardSliderImages.slice(0, -1),
    ]

    const newIndex =
      currentSlide === 0 ? cardSliderImages.length - 1 : currentSlide - 1

    setCurrentSlide(newIndex)
    setCardSliderImages(rotatedImages)
  }

  const nextSlide = () => {
    const rotatedImages = [...cardSliderImages.slice(1), cardSliderImages[0]]
    const newIndex = (currentSlide + 1) % cardSliderImages.length

    setCurrentSlide(newIndex)
    setCardSliderImages(rotatedImages)
  }

  console.log('current slide', currentSlide)

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
              <SliderRatingText>{ratingAmount} out of 5 stars</SliderRatingText>
              from 2.7k reviews
            </SliderRatingTextWrapper>
          </SliderRatingWrapper>

          <SliderButtons>
            <SliderButton onClick={previousSlide}>
              <SliderControlImage src={leftArrow} alt='previous' />
            </SliderButton>

            <SliderButton onClick={nextSlide}>
              <SliderControlImage src={rightArrow} alt='next' />
            </SliderButton>
          </SliderButtons>
        </SliderCaptionWrapper>

        <SliderCardsWrapper
          style={{
            transform: `translateX(-${currentSlide * 10}%)`,
            transition: 'transform 0.5s ease-in-out',
            zIndex: 1,
          }}
        >
          {cardSliderImages.map((slide, index) => (
            <SingleCard
              key={index}
              slideNo={currentSlide}
              src={slide.image}
              alt={`Slide ${index}`}
              userName={slide.userName}
              textTitle={slide.textTitle}
              description={slide.description}
            />
          ))}
        </SliderCardsWrapper>
      </CardSliderWrapper>
    </Container>
  )
}

export default CardSlider
