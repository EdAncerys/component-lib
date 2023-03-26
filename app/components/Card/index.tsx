import React, { useState } from 'react'
import {
  ImageWrapper,
  NextImage,
  LoveButton,
  CardTitle,
  Price,
  Distance,
  Rating,
  TitleWrapper,
  Dot,
  RatingIcon,
  LoveButtonWrapper,
} from './styles'
import replacementImage from '../../assets/images/Rectangle 22766.png'
import loveIcon from '../../assets/icons/loveIcon.svg'
import loveIconRed from '../../assets/icons/loveIconRed.svg'
import ratingIcon from '../../assets/icons/rating.svg'
import { CardProps } from './cardInterface'

export const Card = ({
  imageSrc = replacementImage,
  height = 275,
  width = 415,
  children = 'Card title',
  cardPrice,
  PriceDividedBy,
  distance,
  rating = 0,
  ratingCount = 0,
}: CardProps) => {
  const [isLoved, setIsLoved] = useState(true)

  const handleLoveButton = () => {
    !isLoved ? setIsLoved(true) : setIsLoved(false)
  }

  return (
    <>
      <ImageWrapper height={height} width={width}>
        <NextImage
          src={imageSrc}
          height={height}
          width={width}
          alt='Picture of the author'
        />
        <div onClick={() => handleLoveButton()}>
          <LoveButtonWrapper>
            {isLoved ? (
              <LoveButton src={loveIcon} alt='Default' />
            ) : (
              <LoveButton src={loveIconRed} alt='Liked' />
            )}
          </LoveButtonWrapper>
        </div>
      </ImageWrapper>
      <CardTitle>{children}</CardTitle>
      <TitleWrapper>
        <Price>
          {cardPrice} / {PriceDividedBy}
        </Price>
        <Dot></Dot>
        <Distance>{distance} </Distance>
        <Dot></Dot>
        <Rating>
          <RatingIcon src={ratingIcon} alt='rating' /> {rating} ({ratingCount})
        </Rating>
      </TitleWrapper>
    </>
  )
}
