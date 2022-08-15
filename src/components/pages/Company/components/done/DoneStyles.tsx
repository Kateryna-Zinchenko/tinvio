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
  }
`;

export const Wrapper1 = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const TabWrapper2 = styled.div`
  margin: 16px 0 0;
  padding: 16px 0 16px 16px;
  background: #FB242B;
  border-radius: 32px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-width: 360px;
    margin: 16px 16px 0;
    padding: 16px 0 16px 26px;
  }
  @media (min-width: 1024px) {
    min-width: 500px;
    margin: 0;
    padding: 16px 22px;
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
`;



