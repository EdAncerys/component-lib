import React, { useState } from "react";
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
  ProfileNameWrapper,
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
  PriceSpan,
  FromWrapper,
} from "./styles";
import ratingIcon from "../../assets/icons/rating.svg";
import { ReserveProps } from "./reserveInterface";
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
  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleReserveData &&
      handleReserveData(fromDate as string, tillDate as string);
    if (event.target) {
      event.target.reset();
    }
  };

  return (
    <>
      <Wrapper height={height} width={width}>
        <WrapperTop>
          <PriceWrapper>
            <Price>{reservePrice}</Price>
            <PriceSpan>/</PriceSpan>
            <Day>{reserveDay}</Day>
          </PriceWrapper>

          <Rating>
            <RatingIcon src={ratingIcon} alt="rating" /> {rating} ({ratingCount}
            )
          </Rating>
        </WrapperTop>
        <FromWrapper onSubmit={handleSubmit}>
          <InputWrapper>
            <InputFlex>
              <DateInputTitle>Rent from</DateInputTitle>
              <DateInput
                type="date"
                pattern="\d{2}/\d{2}/\d{4}"
                placeholder={fromDate}
                required
                onChange={(event) =>
                  setFromDate && setFromDate(event.target.value)
                }
              ></DateInput>
            </InputFlex>
            <InputFlex>
              <DateInputTitle>Till</DateInputTitle>
              <DateInput
                type="date"
                pattern="\d{2}/\d{2}/\d{4}"
                placeholder={tillDate}
                required
                onChange={(event) =>
                  setTillDate && setTillDate(event.target.value)
                }
              ></DateInput>
            </InputFlex>
          </InputWrapper>
          <ReserveButton type="submit">Reserve</ReserveButton>
        </FromWrapper>
        <Charge>You wont be chared yet</Charge>
        <Horizontal></Horizontal>
        <RentedBy>Rented by</RentedBy>
        <ProfileWrapper>
          <ProfilePic src={rentedByImage} alt="ProfilePic"></ProfilePic>
          <ProfileNameWrapper>
            <Name>{rentedByName}</Name>
            <Date>Joined in {rentedByJoined}</Date>
          </ProfileNameWrapper>
          <MessageButtonDiv>
            <MessageButton>Message</MessageButton>
          </MessageButtonDiv>
        </ProfileWrapper>
      </Wrapper>
    </>
  );
};

export default Reserve;
