import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 140px 0 0;
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: #212121;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (min-width: 1024px) {
    font-size: 44px;
    line-height: 52px;
  }
  @media (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

export const Tabs = styled.div`
  margin: 40px 0 0;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    margin: 49px 0 0;
    display: none;
  }
`;

export const WrapperFor3 = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    margin: 16px 0 0;
  }
  @media (min-width: 1024px) {
    margin: -350px 0 0 0;
  }
`;

export const WrapperFor2 = styled.div`
  
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    margin: 24px 340px 0 0;
  }
`;

export const TabWrapper2 = styled.div`
  margin: 16px 0 0;
  padding: 16px 0 16px 16px;
  background: #FB242B;
  border-radius: 32px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 360px;
    height: 311px;
    margin: 0 16px;
    padding: 16px 0 16px 26px;
  }
  @media (min-width: 1024px) {
    width: 500px;
    height: 351px;
    margin: 0;
    padding: 16px 22px;
  }
  @media (min-width: 1280px) {
    width: 574px;
    height: 403px;
    margin: 0 54px 0 0;
  }
  @media (min-width: 1440px) {
    width: 654px;
    height: 380px;
  }
  @media (min-width: 1920px) {
    width: 714px;
    height: 391px;
    margin: 0 234px 0 0;
  }
`;

export const TabWrapper4 = styled.div`
  margin: 16px 0 0;
  padding: 29px 0 0;
  background: #FB242B;
  border-radius: 32px;
  height: 309px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 376px;
    height: 311px;
  }
  @media (min-width: 1024px) {
    width: 340px;
    height: 342px;
    margin: 24px 0 0;
  }
  @media (min-width: 1280px) {
    width: 404px;
    height: 340px;
    margin: 24px 0 0 54px;
  }
  @media (min-width: 1440px) {
    height: 298px;
  }
  @media (min-width: 1920px) {
    width: 492px;
    height: 310px;
    margin: 24px 0 0 234px;
  }
`;

export const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #FFFFFF;
`;

export const ImgDevice = styled.img`
  max-width: 232px;
  margin: 16px 0 0 30px;
`;

export const ImgScreen = styled.img`
  max-width: 507px;
  float: right;
  margin: 0 -156px 0 0;

  @media (min-width: 768px) {
    max-width: 400px;
    margin: 0 -66px 0 0px;
  }
  @media (min-width: 1024px) {
    max-width: 456px;
    margin: 0;
    float: unset;
  }
  @media (min-width: 1280px) {
    max-width: 530px;
  }
  @media (min-width: 1440px) {
    max-width: 497px;
    margin: 0 auto;
  }
  @media (min-width: 1920px) {
    max-width: 513px;
  }
`;


export const TabWrapper1 = styled.div`
  margin: 16px auto 0;
  width: 100%;
  padding: 40px 16px 40px 40px;
  background: #F7F7F7;
  border-radius: 0 32px 32px 0;

  @media (min-width: 768px) {
    padding: 40px;
    margin: 0;
  }
  @media (min-width: 1024px) {
    width: 500px;
    height: 351px;
  }
  @media (min-width: 1280px) {
    width: 628px;
    height: 403px;
    padding: 66px 40px 66px 124px;
  }
  @media (min-width: 1440px) {
    width: 708px;
    height: 380px;
  }
  @media (min-width: 1920px) {
    width: 948px;
    height: 391px;
    padding: 66px 40px 66px 304px;
  }
`;

export const TabWrapper3 = styled(TabWrapper1)`
  padding: 40px 40px 79px 40px;
  background: #363636;
  border-radius: 32px;

  @media (min-width: 768px) {
    width: 376px;
    height: 311px;
    padding: 40px 40px 77px 40px;
  }
  @media (min-width: 1024px) {
    width: 296px;
    height: 342px;
    padding: 40px 40px 50px 40px;
    margin: 24px 24px 0;
  }
  @media (min-width: 1280px) {
    width: 328px;
    height: 340px;
    padding: 40px 40px 77px 40px;
  }
  @media (min-width: 1440px) {
    width: 382px;
    height: 298px;
    padding: 40px 40px 56px 40px;
  }
  @media (min-width: 1920px) {
    width: 421px;
    height: 310px;
    margin: 24px 0 0;
  }
`;

export const TabWrapper5 = styled(TabWrapper1)`
  padding: 40px;
  border-radius: 32px 0 0 32px;

  @media (min-width: 768px) {
    height: 311px;
    margin: -311px 0 0 392px;
  }
  @media (min-width: 1024px) {
    width: 340px;
    height: 342px;
    margin: 24px 0 0;
  }
  @media (min-width: 1280px) {
    width: 446px;
    height: 340px;
    padding: 40px 124px 40px 40px;
  }
  @media (min-width: 1440px) {
    width: 552px;
    height: 298px;
  }
  @media (min-width: 1920px) {
    width: 726px;
    height: 310px;
    padding: 40px 304px 58px 40px;
  }
`;

export const Year1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #212121;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
  @media (min-width: 1920px) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Year3 = styled(Year1)`
  color: #FFF;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }
  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Year5 = styled(Year3)`
  color: #212121;


  @media (min-width: 768px) {

  }
  @media (min-width: 1920px) {

  }
`;

export const List1 = styled.div`
  padding: 16px 0 0;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 25px 0 0;
  }
`;

export const List = styled(List1)`

  @media (min-width: 768px) {
    padding: 16px 0 0;
  }
  @media (min-width: 1280px) {
    padding: 24px 0 0;
  }
`;

export const LiWrapper1 = styled.div`
  padding: 5px 0 0 15px;
  margin: 12px 0 0;
  position: relative;

  &:first-child {
    margin: 0;
  }

  @media (min-width: 768px) {
    margin: 16px 0 0;
  }
`;

export const LiWrapper = styled(LiWrapper1)`

  @media (min-width: 768px) {
    margin: 12px 0 0;
  }
  @media (min-width: 1280px) {

  }
`;

export const Li1 = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #5C5C5C;
  z-index: 1;
  position: relative;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
  }
  @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Li = styled(Li1)`
  color: #FFF;
  line-height: 150%;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1920px) {
    font-size: 16px;
  }
`;

export const Li5 = styled(Li)`
  color: #5C5C5C;

  @media (min-width: 768px) {

  }
  @media (min-width: 1920px) {

  }
`;

export const DotWrapper = styled.div`
  width: 31px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LightDot = styled.div`
  width: 22px;
  height: 22px;
  background: #FFF;
  border-radius: 2px;
  transform: rotate(-45deg);
`;

export const LightDot3 = styled(LightDot)`
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(109, 109, 109, 0.18) 0%, rgba(250, 250, 250, 0) 100%);
`;

export const Tabs1024 = styled(Tabs)`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    margin: 49px 0 0;
  }
`;





