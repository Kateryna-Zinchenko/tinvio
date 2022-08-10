import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 140px 0 0;
  padding: 48px 0;
  background: #363636;
  border-radius: 0 42px 42px 0;
  
  @media (min-width: 768px) {
    padding: 48px 40px;
  }
  @media (min-width: 1024px) {
    margin: 180px 0 0;
    padding: 48px 88px;
  }
  @media (min-width: 1280px) {
    margin: 180px 54px 0 0;
    padding: 48px 118px 48px 172px;
  }
  @media (min-width: 1440px) {
    padding: 48px 150px 48px 204px;
  }
  @media (min-width: 1920px) {
    margin: 180px 234px 0 0;
    padding: 48px 181px 48px 416px;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: #FFFFFF;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
  @media (min-width: 1024px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (min-width: 1440px) {
    line-height: 44px;
  }
  @media (min-width: 1920px) {
    font-size: 44px;
    line-height: 52px;
  }
`;

export const Items = styled.div`
  margin: 40px auto 0;

  @media (min-width: 768px) {
    margin: 33px auto 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const Item = styled.div`
  margin: 30px 0 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const Item2 = styled(Item)`

  @media (min-width: 768px) {
    margin: 8px 0 0;
  }
`;

export const Img1 = styled.img`
  margin: 0 auto;
  width: 64px;
`;

export const Img2 = styled(Img1)`
  width: 57px;
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;
  margin: 24px auto 0;
  
  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 29px;
  }
  @media (min-width: 1920px) {
    font-size: 28px;
    line-height: 34px;
  }
`;
export const Title2 = styled(Title)`

  @media (min-width: 768px) {
    margin: 32px auto 0;
  }
`;

export const Caption = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  max-width: 160px;
  color: #D2D2D2;
  margin: 4px auto 0;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 23px;
  }
  @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 24px;
  }
`;


