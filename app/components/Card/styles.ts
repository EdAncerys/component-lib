import styled from '@emotion/styled'
import Image from 'next/image'
import { CardProps } from './cardInterface'

export const ImageWrapper = styled.div``

export const NextImage = styled(Image)<CardProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: 15px;
  position: relative;
`
export const LoveButtonCircle = styled.p`
  height: 49px;
  width: 49px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  position: absolute;
  top: 1%;
  left: 46.5%;
`
export const LoveButtonWrapper = styled.div``

export const LoveButton = styled(Image)`
  position: absolute;
  top: 2.4%;
  left: 48%;
`

export const CardTitle = styled.p`
  color: #020c3b;
  font-weight: 700;
  font-size: 20px;
  line-height: 0px;
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 270px;
`
export const Price = styled.p`
  color: #6b74a2;
  font-size: 20px;
  font-weight: 400;
`
export const Distance = styled.p`
  color: #6b74a2;
  font-size: 20px;
  font-weight: 400;
`
export const Dot = styled.p`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #6b74a2;
  margin-top: 4%;
`
export const Rating = styled.p`
  color: #6b74a2;
  font-size: 20px;
  font-weight: 400;
`

export const RatingIcon = styled(Image)`
  margin: 2px 2px 0 2px;
`
