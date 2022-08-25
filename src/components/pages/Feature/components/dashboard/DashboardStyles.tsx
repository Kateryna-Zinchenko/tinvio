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
  border-radius: 0 50px 50px 0;
  background: #363636;
  margin: 24px 0 0;
  overflow: hidden;
  
  @media (min-width: 768px) {
    margin: 32px 0 0;
  }
  @media (min-width: 1024px) {
    display: flex;
    padding: 12px 0;
  }
  @media (min-width: 1280px) {
    margin: 32px 54px 0 0;
  }
  @media (min-width: 1920px) {
    margin: 32px 234px 0 0;
  }
`;

export const Options = styled.div`
  padding: 47px 36px 0 36px;
  
  @media (min-width: 768px) {
    padding: 80px 118px 0 48px;
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    padding: 80px 68px 72px 40px;
    max-width: unset;
    width: 553px;
  }
  @media (min-width: 1280px) {
    padding: 80px 83px 84px 124px;
    width: 652px;
  }
  @media (min-width: 1440px) {
    padding: 80px 144px 84px 124px;
    width: 732px;
  }
  @media (min-width: 1920px) {
    padding: 75px 178px 53px 306px;
    width: 1035px;
  }
`;

export const OptionsWrapper1 = styled.div`
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1920px) {
  }
`;

export const OptionsWrapper2 = styled.div`
  padding: 43px 0 0;
  
  @media (min-width: 768px) {
    padding: 108px 0 0;
    width: fit-content;
  }
  @media (min-width: 1024px) {
    width: unset;
    display: flex;
    justify-content: space-between;
    padding: 56px 0 0;
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1920px) {
  }
`;

export const Option = styled.div`
  margin: 0 0 36px;
  &:last-child {
    margin: 0;
  }
  
  @media (min-width: 768px) {
    max-width: 236px;
    margin: 0;
  }
  @media (min-width: 1024px) {
    
  }
  @media (min-width: 1280px) {
    
  }
  @media (min-width: 1920px) {
  }
`;

export const Title = styled.div`
  position: relative;
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

export const DotWrapper = styled.div`
  width: 49px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -7px;
  left: -20px;

  @media (min-width: 768px) {
    width: 63px;
    height: 63px;
    top: -13px;
    left: -31px;
  }
`;

export const Dot = styled.div`
  width: 34px;
  height: 34px;
  background: rgba(109, 109, 109, 0.18);
  border-radius: 4px;
  transform: rotate(-45deg);

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
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
    max-width: 191px;
  }
  @media (min-width: 1920px) {
    font-size: 16px;
    max-width: 237px;
  }
`;

export const Text = styled.div`
  position: relative;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #FFFFFF;
  height: fit-content;

  @media (min-width: 768px) {
    margin: 108px 0 0;
    max-width: 198px;
  }
  @media (min-width: 1024px) {
    margin: 0 -6px 0 0
  }
  @media (min-width: 1920px) {
    font-size: 28px;
    max-width: 235px;
    margin: 0;
  }
`;

export const Img = styled.img`
  min-width: 462px;
  padding: 40px 0 0;
  margin: 0 -103px 0 0px;
  float: right;

  @media (min-width: 768px) {
    max-width: 690px;
    padding: 0;
    margin: -347px -245px -30px 0;
  }
  @media (min-width: 1024px) {
    max-height: 460px;
    min-width: 690px;
    margin: 0 -219px 0 0;
  }
  @media (min-width: 1280px) {
    margin: 0 -240px 0 0;
  }
  @media (min-width: 1440px) {
    margin: 0 -36px 0 0;
  }
`;
