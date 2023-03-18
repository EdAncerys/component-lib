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
  LoveButtonCircle,
  RatingIcon,
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
  className,
  children = 'Card title',
  cardPrice,
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
      <ImageWrapper>
        <NextImage
          src={imageSrc}
          height={height}
          width={width}
          alt='Picture of the author'
        />
        <div onClick={() => handleLoveButton()}>
          <LoveButtonCircle></LoveButtonCircle>
          {isLoved ? (
            <LoveButton src={loveIcon} alt='Default' />
          ) : (
            <LoveButton src={loveIconRed} alt='Liked' />
          )}
        </div>
      </ImageWrapper>
      <CardTitle>{children}</CardTitle>
      <TitleWrapper>
        <Price> {cardPrice} </Price>
        <Dot></Dot>
        <Distance>{distance} </Distance>
        <Dot></Dot>
        <RatingIcon src={ratingIcon} alt='rating' />
        <Rating>
          {rating} ({ratingCount})
        </Rating>
      </TitleWrapper>
    </>
  )
}
