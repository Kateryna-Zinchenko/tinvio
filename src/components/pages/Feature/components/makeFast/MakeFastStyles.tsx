import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 120px 0 0;

  @media(min-width: 768px) {
    margin: 142px 0 0;
  }
  @media(min-width: 1024px) {
    margin: 80px 0 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  padding: 0 16px;
  
  @media(min-width: 1024px) {

  }
  @media(min-width: 1280px) {

  }
  @media(min-width: 1440px) {

  }
  @media(min-width: 1920px) {

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
  margin: 0 auto;

  @media(min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
    max-width: 464px;
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

export const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #5C5C5C;
  padding: 12px 0 0;

  @media(min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
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

export const BoxWrapper = styled.div`
  position: relative;
  max-width: 375px;
  height: 574px;
  margin: 24px auto 0;

  @media(min-width: 768px) {
    margin: 40px auto 0;
    max-width: 768px;
    height: 792px;
  }
  @media(min-width: 1024px) {
    margin: 0;
    max-width: 1024px;
  }
  @media(min-width: 1280px) {

  }
  @media(min-width: 1440px) {

  }
  @media(min-width: 1920px) {

  }
`;

export const PurpleBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 406px;
  height: 406px;
  background: rgba(251, 36, 43, 0.6);
  border-radius: 52px;
  transform: translate(-50%, -50%) rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;

  @media(min-width: 768px) {
    width: 560px;
    height: 560px;
    border-radius: 72px;
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

export const RedBox = styled.div`
  width: 355px;
  height: 355px;
  background: #FB242B;
  border-radius: 52px;

  @media(min-width: 768px) {
    width: 491px;
    height: 491px;
    border-radius: 72px;
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
  position: absolute;
  bottom: 76px;
  left: 33px;
  width: 189px;
  height: 143px;
  background: url("/assets/icons/features/rhombs.png") no-repeat;
  background-size: cover;

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

export const Stars = styled.div`
  position: absolute;
  top: 30px;
  left: 1px;
  width: 58px;
  height: 53px;
  background: url("/assets/icons/features/make-fast-stars.png") no-repeat;
  background-size: cover;

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
  width: 240px;
  position: absolute;
  top: 59px;
  left: -22px;

  @media(min-width: 768px) {
    width: 331px;
    top: 81px;
    left: 90px;
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
  width: 239px;
  position: absolute;
  bottom: 11px;
  right: -26px;

  @media(min-width: 768px) {
    width: 330px;
    bottom: 11px;
    right: 94px;
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