import styled from "styled-components";

export const Wrapper = styled.div<{ submitted: boolean }>`
  display: ${({submitted}) => submitted ? 'block' : 'none'};
  width: 375px;
  margin: 33px 0 0;
  padding: 16px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%);
  border-radius: 36px;
  @media (min-width: 768px) {
    width: 489px;
    padding: 32px;
  }
  @media (min-width: 1024px) {
    margin: 0;
  }
  @media (min-width: 1920px) {
    width: 504px;
  }
`;

export const Inner = styled.div`
  width: 343px;
  background: #FFFFFF;
  border-radius: 32px;
  padding: 48px 0;
  @media (min-width: 768px) {
    width: 425px;
  }
  @media (min-width: 1920px) {
    width: 440px;
  }
`;

export const Title = styled.div`
  margin: 0 auto;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #212121;

  & span {
    color: #FF474D;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    width: 425px;
    text-align: center;
  }
  @media (min-width: 1920px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const Img = styled.img`
  width: 110px;
  margin: 32px auto 0;
`;

export const Caption = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #5C5C5C;
  margin: 12px auto 0;
  @media (min-width: 1920px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Button = styled.div`
  width: 188px;
  height: 48px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  background: #FF474D;
  border-radius: 16px;
  padding: 14px 45px;
  margin: 32px auto 0;
  cursor: pointer;
  display: block;
  &:hover {
    background: rgba(255, 71, 77, 0.8);
    transition: 0.2s;
  }
  @media (min-width: 1920px) {
    width: 220px;
    height: 56px;
    font-size: 20px;
    line-height: 25px;
    margin: 31px auto 0;
  }
`;