import styled from '@emotion/styled'
import Image from 'next/image'
import { ReserveProps } from './reserveInterface'

export const Wrapper = styled.div<ReserveProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: 20px;
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.11);
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 45px;

  @media (max-width: 768px) {
    height: auto;
    width: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`
export const PriceWrapper = styled.div`
  display: flex;
`
export const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 18px;
  color: #020c3b;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const PriceSpan = styled.span`
  font-size: 24px;
  margin-bottom: 18px;
  color: #020c3b;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const Day = styled.p`
  color: #020c3b;
  font-size: 24px;
`
export const Rating = styled.p`
  color: #020c3b;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`
export const RatingIcon = styled(Image)`
  margin: 2px 2px 0 2px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    margin: 0 6px 0 0;
  }
`

export const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
  }
`
export const DateInputTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #020c3b;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
export const DateInput = styled.input`
  width: 240px;
  height: 57px;
  margin-right: 10px;
  border-radius: 10px;
  padding-left: 17px;
  background-color: white;
  color: black;
  border: 1px solid #e1e1e1;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const FromWrapper = styled.form``

export const InputWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const InputFlex = styled.div``

export const ReserveButton = styled.button`
  width: 491px;
  height: 68px;
  margin-top: 24px;
  border-radius: 54px;
  color: white;
  font-weight: bold;
  background-color: #4629d3;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    height: 10vh;
  }
`
export const Charge = styled.p`
  font-size: 18px;
  color: #020c3b;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`
export const Horizontal = styled.hr`
  margin-top: 29px;
  border: 1px solid #e1e1e1;
`
export const RentedBy = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #020c3b;
  margin-top: 29px;
`
export const ProfileWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ProfilePic = styled(Image)`
  margin-top: 18px;
`
export const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
`
export const Name = styled.p`
  color: #020c3b;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`
export const Date = styled.p`
  color: #6b74a2;
  font-size: 18px;
`
export const MessageButtonDiv = styled.div`
  margin-top: 25px;
  margin-left: 90px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 1em;
    margin-left: 0;
  }
`
export const MessageButton = styled.button`
  border: 1px solid #4629d3;
  height: 63px;
  width: 155px;
  border-radius: 54px;
  background-color: white;
  color: #4629d3;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 768px) {
  }
`
