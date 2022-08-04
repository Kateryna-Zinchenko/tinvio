import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 120px 0 0;

  @media(min-width: 768px) {
    margin: 142px 0 0;
  }
  @media(min-width: 1024px) {
    margin: 80px 0 0;
    padding: 0 40px;
  }
  @media(min-width: 1280px) {
    padding: 0 124px;
  }
  @media(min-width: 1920px) {
    padding: 0 304px;
  }
`;

export const TextWrapper = styled.div`
  padding: 0 16px;
  
  @media(min-width: 1024px) {
    padding: 0;
    max-width: 336px;
  }
  @media(min-width: 1280px) {
    max-width: 440px;
  }
  @media(min-width: 1440px) {
    max-width: 484px;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #212121;

  @media(min-width: 768px) {
    max-width: 382px;
    font-size: 36px;
    line-height: 42px;
    margin: 0 auto;
  }
  @media(min-width: 1024px) {
    margin: 0;
    text-align: left;
  }
  @media(min-width: 1280px) {
    font-size: 40px;
    line-height: 49px;
  }
  @media(min-width: 1920px) {
    max-width: 462px;
  }
`;

export const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: #5C5C5C;
  padding: 12px 0 0;

  @media(min-width: 768px) {
    font-size: 16px;
  }
  @media(min-width: 1024px) {
    text-align: left;
  }
  @media(min-width: 1920px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const BoxWrapper = styled.div`
  position: relative;
  max-width: 375px;
  height: 574px;
  margin: 24px auto 0;

  @media(min-width: 768px) {

  }
  @media(min-width: 1024px) {

  }
  @media(min-width: 1280px) {

  }
  @media(min-width: 1440px) {

  }
  @media(min-width: 1920px) {

  }
`;

export const MainBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 406px;
  height: 406px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
  transform: translate(-50%, -50%) rotate(-45deg);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(min-width: 768px) {

  }
  @media(min-width: 1024px) {

  }
  @media(min-width: 1280px) {

  }
  @media(min-width: 1440px) {

  }
  @media(min-width: 1920px) {

  }
`;

export const BoxInner = styled.div`
  width: 355px;
  height: 355px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%);
  border-radius: 40px;

  @media(min-width: 768px) {

  }
  @media(min-width: 1024px) {

  }
  @media(min-width: 1280px) {

  }
  @media(min-width: 1440px) {

  }
  @media(min-width: 1920px) {

  }
`;

export const Rhombs = styled.div`
  background: url("/assets/icons/features/rhombs.png") no-repeat;
  background-size: cover;
  width: 233px;
  height: 176px;
  position: absolute;
  top: 13px;
  right: -46px;

  @media(min-width: 768px) {

  }
  @media(min-width: 1024px) {

  }
  @media(min-width: 1280px) {

  }
  @media(min-width: 1440px) {

  }
  @media(min-width: 1920px) {

  }
`;

export const DeviceLeft = styled.img`
  width: 191px;
  position: absolute;
  bottom: 49px;
  left: -10px;

  @media(min-width: 768px) {

  }
  @media(min-width: 1024px) {

  }
  @media(min-width: 1280px) {

  }
  @media(min-width: 1440px) {

  }
  @media(min-width: 1920px) {

  }
`;

export const DeviceRight = styled.img`
  width: 343px;
  position: absolute;
  top: 61px;
  right: -91px;

  @media(min-width: 768px) {

  }
  @media(min-width: 1024px) {

  }
  @media(min-width: 1280px) {

  }
  @media(min-width: 1440px) {

  }
  @media(min-width: 1920px) {

  }
`;
