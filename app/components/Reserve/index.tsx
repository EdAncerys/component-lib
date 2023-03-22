import React, { useState } from 'react'
import {
  Charge,
  Date,
  DateInput,
  DateInputTitle,
  Day,
  Horizontal,
  InputFlex,
  InputWrapper,
  MessageButton,
  MessageButtonDiv,
  Name,
  NameDateWrapper,
  Price,
  PriceWrapper,
  ProfilePic,
  ProfileWrapper,
  Rating,
  RatingIcon,
  RentedBy,
  ReserveButton,
  Wrapper,
  WrapperTop,
} from './styles'
import ratingIcon from '../../assets/icons/rating.svg'
import { ReserveProps } from './reserveInterface'
export const Reserve = ({
  reservePrice,
  reserveDay,
  rentedByImage,
  rentedByName,
  rentedByJoined,
  rating,
  ratingCount,
  height = 560,
  width = 554,
  fromDate,
  setFromDate,
  tillDate,
  setTillDate,
  handleReserveData,
}: ReserveProps) => {
  return (
    <>
      <Wrapper height={height} width={width}>
        <WrapperTop>
          <PriceWrapper>
            <Price>{reservePrice}</Price>
            <span>/</span>
            <Day>{reserveDay}</Day>
          </PriceWrapper>

          <Rating>
            <RatingIcon src={ratingIcon} alt='rating' /> {rating} ({ratingCount}
            )
          </Rating>
        </WrapperTop>
        <InputWrapper>
          <InputFlex>
            <DateInputTitle>Rent from</DateInputTitle>
            <DateInput
              pattern='\d{2}/\d{2}/\d{4}'
              placeholder={tillDate}
              required
              onChange={(event) =>
                setFromDate && setFromDate(event.target.value)
              }
            ></DateInput>
          </InputFlex>
          <InputFlex>
            <DateInputTitle>Till</DateInputTitle>
            <DateInput
              pattern='\d{2}/\d{2}/\d{4}'
              placeholder={tillDate}
              required
              onChange={(event) =>
                setTillDate && setTillDate(event.target.value)
              }
            ></DateInput>
          </InputFlex>
        </InputWrapper>
        <ReserveButton
          onClick={() =>
            handleReserveData &&
            handleReserveData(fromDate as string, tillDate as string)
          }
        >
          Reserve
        </ReserveButton>
        <Charge>You wont be chared yet</Charge>
        <Horizontal></Horizontal>
        <RentedBy>Rented by</RentedBy>
        <ProfileWrapper>
          <ProfilePic src={rentedByImage} alt='ProfilePic'></ProfilePic>
          <NameDateWrapper>
            <Name>{rentedByName}</Name>
            <Date>Joined in {rentedByJoined}</Date>
          </NameDateWrapper>
          <MessageButtonDiv>
            <MessageButton>Message</MessageButton>
          </MessageButtonDiv>
        </ProfileWrapper>
      </Wrapper>
    </>
  )
}

export default Reserve
