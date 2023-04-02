import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  display: block;
  overflow-x: visible;
  position: relative;
  margin: 2em 0;
`;

export const CardSliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  gap: 1em;
  align-items: center;
`;

export const SliderCaptionWrapper = styled.div`
  color: black;
  background-color: white;
  width: 23em;
  height: 40em;
  padding-left: 1em;
  position: absolute;
  z-index: 10;
  display: block;
  padding-top: 10em;
`;

export const SliderHeader = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 40px;
  letter-spacing: -0.03em;
  color: #020c3b;
  margin-bottom: 1em;
`;
export const SliderHeadingText = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b74a2;
  margin-bottom: 2em;
`;

export const SliderRatingWrapper = styled.div``;

export const SliderRatingTextWrapper = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 10px;
  line-height: 26px;
  color: #020c3b;
`;
export const SliderRatingText = styled.span`
  font-weight: bolder;
`;

export const SliderButtons = styled.div`
  display: flex;
  justify-content: center;
  justify-content: start;
  margin-top: 3em;
`;
export const SliderButton = styled.button`
  margin: 0 8px;
  background-color: #fff;
  color: #000;
  border: 1px solid #4629d3;
  border-radius: 50%;
  padding: 10px 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;
export const SliderControlImage = styled(Image)``;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 1%;
`;

export const SliderCardsWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  margin-left: 28em;
  align-items: center;
  justify-content: flex-start;
  width: 15em;
  height: 35em;
`;

export const SliderText = styled.p`
  color: #081764;
  font-size: 20px;
  position: absolute;
  top: 62%;
  left: 6%;
  background-color: white;
  border-radius: 5px;
  width: 462px;
  padding: 6% 0% 0% 4%;
`;
export const SliderName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #081764;
  margin-top: 3%;
`;
export const SliderDesignation = styled.p`
  color: #081764;
  font-size: 20px;
  padding-bottom: 6%;
`;
export const SliderImage = styled(Image)`
  width: 514px;
  height: 609px;
  transition: transform 0.5s ease-in-out;
`;
