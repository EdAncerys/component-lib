import React from 'react'
import {
  Day,
  InputFlex,
  InputWrapper,
  Price,
  PriceWrapper,
  Rating,
  RentFrom,
  RentFromInput,
  ReserveButton,
  Till,
  TillInput,
  Wrapper,
  WrapperTop,
} from './styles'

export const Reverse = () => {
  return (
    <>
      <Wrapper>
        <WrapperTop>
          <PriceWrapper>
            <Price>$23/</Price>
            <Day>day</Day>
          </PriceWrapper>
          <Rating>4.9(23)</Rating>
        </WrapperTop>
        <InputWrapper>
          <InputFlex>
            <RentFrom>Rent from</RentFrom>
            <RentFromInput placeholder='11/15/2022'></RentFromInput>
          </InputFlex>
          <InputFlex>
            <Till>Till</Till>
            <TillInput placeholder='11/15/2022'></TillInput>
          </InputFlex>
        </InputWrapper>
        <ReserveButton>Reserve</ReserveButton>
      </Wrapper>
    </>
  )
}

export default Reverse
