import React, { useState } from "react";
import leftArrow from "../../assets/icons/arrow-narrow-left.svg";
import rightArrow from "../../assets/icons/arrow-narrow-right.svg";
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
} from "./styles";
import SingleCard from "./SingleCard";
import Rating from "./Rating";
import { CardSliderProps } from "./interface";

const CardSlider: React.FC<CardSliderProps> = ({
  ratingCount,
  slideImages,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ratingAmount = ratingCount;

  const previousSlide = () => {
    const newIndex =
      currentSlide === 0 ? slideImages.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentSlide === slideImages.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  console.log("currenet slide", currentSlide);

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
              <SliderControlImage src={leftArrow} alt="previous" />
            </SliderButton>

            <SliderButton onClick={nextSlide}>
              <SliderControlImage src={rightArrow} alt="next" />
            </SliderButton>
          </SliderButtons>
        </SliderCaptionWrapper>

        <SliderCardsWrapper
          style={{
            transform: `translateX(-${currentSlide * 200}%)`,
            transition: "transform 0.5s ease",
            zIndex: 1,
          }}
        >
          {slideImages.map((slide, index) => (
            <SingleCard
              key={index}
              slideNo={currentSlide}
              src={slide.image}
              alt={`Slide ${index}`}
              userName={slide.userName}
              textTitle={slide.textTitle}
              description={slide.description}
              className="slider-image"
            />
          ))}
        </SliderCardsWrapper>
      </CardSliderWrapper>
    </Container>
  );
};

export default CardSlider;
