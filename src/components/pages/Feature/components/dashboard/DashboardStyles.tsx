import styled from "styled-components";

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #212121;
  margin: 180px 0 0;
  padding: 0 16px 0;
  
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 44px;
  }
  @media (min-width: 1024px) {
    padding: 0 40px 0;
    font-size: 44px;
    line-height: 54px;
  }
  @media (min-width: 1280px) {
    padding: 0 124px 0;
  }
  @media (min-width: 1920px) {
    padding: 0 304px 0;
    font-size: 48px;
    line-height: 59px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 0 50px 50px 0;
  background: #363636;
  margin: 24px 0 0;
  overflow: hidden;
  
  @media (min-width: 768px) {
    margin: 32px 0 0;
  }
`;

export const Options = styled.div`
  padding: 47px 36px 0 36px;
  
  @media (min-width: 768px) {
    padding: 80px 48px 0 48px;
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    padding: 96px 40px 84px 40px;
  }
  @media (min-width: 1280px) {
    padding: 96px 124px 84px 124px;
  }
  @media (min-width: 1920px) {
    padding: 87px 306px 75px 306px;
  }
`;

export const Option = styled.div`
  margin: 0 0 36px;
  &:last-child {
    margin: 0;
  }
  
  @media (min-width: 768px) {
    max-width: 236px;
  }
  @media (min-width: 1024px) {
    
  }
  @media (min-width: 1280px) {
    
  }
  @media (min-width: 1920px) {
    
  }
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #FFFFFF;
  
  @media (min-width: 1920px) {
    font-size: 28px;
  }
`;

export const P = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #FAFAFA;
  
  @media (min-width: 1024px) {
    
  }
  @media (min-width: 1920px) {
    font-size: 16px;
  }
`;

export const Text = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #FFFFFF;
  height: fit-content;

  @media (min-width: 1920px) {
    font-size: 28px;
  }
`;

export const Img = styled.img`
  max-width: 462px;
  padding: 40px 0 0;
  margin: 0 -139px 0 0px;
  float: right;

  @media (min-width: 768px) {
    max-width: 690px;
    padding: 0;
    margin: 0 -500px 0 0;
  }
  @media (min-width: 1024px) {
    
  }
`;
