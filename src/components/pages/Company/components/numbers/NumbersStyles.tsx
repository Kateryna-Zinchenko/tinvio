import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 140px 0 0;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    margin: 180px 0 0;
    flex-wrap: nowrap;
  }
`;

export const LeftBlock = styled.div`
  background: #F7F7F7;
  border-radius: 0 32px 32px 0;
  margin: 0 16px 0 0;
  padding: 49px 0 49px 16px;
  height: fit-content;

  @media (min-width: 768px) {
    margin: 66px 0 0;
    width: 376px;
    padding: 48px 0 48px 16px;
  }
  @media (min-width: 1024px) {
    padding: 48px 0 48px 40px;
    width: 264px;
  }
  @media (min-width: 1280px) {
    width: 370px;
    padding: 48px 0 48px 124px;
  }
  @media (min-width: 1440px) {
    width: 410px;
  }
  @media (min-width: 1920px) {
    width: 621px;
    padding: 48px 0 48px 304px;
  }
`;

export const Amount = styled.div`
  font-family: 'Gilroy';
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #212121;

  & span {
    color: #FF474D;
  }

  @media (min-width: 768px) {
    font-weight: 600;
    font-size: 44px;
    line-height: 54px;
  }
  @media (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

export const Caption = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #212121;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 25px;
    margin: 4px 0 0;
  }
  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const MiddleBlock = styled.div`
  background: #F7F7F7;
  border-radius: 32px;
  margin: 16px 16px 0;
  padding: 49px 0;

  @media (min-width: 768px) {
    margin: 0 16px 0;
    padding: 48px 0;
    width: 360px;
    height: fit-content;
  }
  @media (min-width: 1024px) {
    margin: 0;
    width: 224px;
  }
  @media (min-width: 1280px) {
    width: 246px;
  }
  @media (min-width: 1440px) {
    width: 286px;
  }
  @media (min-width: 1920px) {
    width: 316px;
  }
`;

export const MiddleBlock2 = styled(MiddleBlock)`

  @media (min-width: 768px) {
    margin: 16px 16px 0;
  }
  @media (min-width: 1024px) {
    margin: 66px 0 0;
  }
`;

export const RightBlock = styled(LeftBlock)`
  border-radius: 32px 0 0 32px;
  margin: 16px 0 0 16px;
  padding: 49px 16px 49px 0;

  @media (min-width: 768px) {
    margin: -50px 0 0;
    padding: 48px 16px 48px 0;
  }
  @media (min-width: 1024px) {
    margin: 0;
    padding: 48px 40px 48px 0;
  }
  @media (min-width: 1280px) {
    padding: 48px 124px 48px 0;
  }
  @media (min-width: 1920px) {
    padding: 48px 304px 48px 0;
  }
`;
