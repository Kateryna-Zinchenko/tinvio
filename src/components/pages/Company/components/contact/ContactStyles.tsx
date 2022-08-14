import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 180px auto 80px;

  @media (min-width: 1024px) {
    margin: 140px auto 80px;
  }
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
  margin: 40px auto 0;
  padding: 0 16px 0;
  
  @media (min-width: 1024px) {
    margin: 49px auto 0;
    padding: 0 40px 0;
    display: flex;
  }
  @media (min-width: 1280px) {
    padding: 0 124px 0;
  }
  @media (min-width: 1920px) {
    padding: 0 304px 0;
  }
`;

export const Tab = styled.div`
  padding: 48px 48px;
  background: #F7F7F7;
  border-radius: 32px;
  margin: 16px 0 0;
  
  @media (min-width: 1024px) {
    padding: 80px 48px;
    margin: 0 0 0 24px;
    
    &:first-child {
      margin: 0;
    }
  }
`;

export const Tab2 = styled(Tab)`
  background: #363636;
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #212121;

  @media (min-width: 1280px) {
    max-width: 150px;
    margin: 0 auto;
  }
  @media (min-width: 1920px) {
    max-width: 180px;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
  }
`;

export const Title2 = styled(Title)`
  color: #FFFFFF;
`;

export const P = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #5C5C5C;
  padding: 16px 0 32px;
  
  @media (min-width: 1920px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const P2 = styled(P)`
  color: #FFFFFF;
`;
