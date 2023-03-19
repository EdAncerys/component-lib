import styled from '@emotion/styled'
import Image from 'next/image'
import { CardProps } from './cardInterface'

interface ImageSizeProps {
  height?: number
  width?: number
}

export const ImageWrapper = styled.div<ImageSizeProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  position: relative;
`

export const NextImage = styled(Image)<CardProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: 15px;
`

export const LoveButtonWrapper = styled.div`
  position: absolute;
  height: 49px;
  width: 49px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 3%;
  left: 85.5%;
`

export const LoveButton = styled(Image)`
  top: 6.4%;
  left: 38%;
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
  width: 20em;
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
  margin: auto;
`
export const Rating = styled.p`
  color: #6b74a2;
  font-size: 20px;
  font-weight: 400;
`

export const RatingIcon = styled(Image)`
  margin: 2px 2px 0 2px;
`
