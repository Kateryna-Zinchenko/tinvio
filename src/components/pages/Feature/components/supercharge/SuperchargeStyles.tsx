import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: #F7F7F7;
  border-radius: 0 50px 50px 0;
  margin: 120px 0 0;
  padding: 48px 16px;

  @media(min-width: 768px) {
    margin: 140px 0 0;
  }
  @media(min-width: 1280px) {
    margin: 140px 0 0 -54px;
    padding: 48px 0 48px 108px;
  }
  @media(min-width: 1920px) {
    margin: 140px 0 0 -234px;
    padding: 50px 0 48px 468px;
  }
`;

export const Text = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  color: #5C5C5C;

  @media(min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media(min-width: 1024px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media(min-width: 1280px) {
    font-size: 20px;
    line-height: 25px;
  }
  @media(min-width: 1920px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #212121;
  padding: 9px 0 0;
  margin: 0 auto;

  @media(min-width: 768px) {
    font-size: 32px;
    line-height: 38px;
    max-width: 460px;
  }
  @media(min-width: 1024px) {
    font-size: 32px;
    line-height: 38px;
    padding: 10px 0 0;
  }
  @media(min-width: 1280px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media(min-width: 1920px) {
    font-size: 44px;
    line-height: 54px;
    max-width: 556px;
  }
`;

export const Button = styled.button`
  width: 188px;
  height: 48px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #FF474D;
  border: none;
  border-radius: 16px;
  //padding: 14px 50px;
  display: block;
  margin: 24px auto 0;
  cursor: pointer;
  &:hover {
    background: rgba(255, 71, 77, 0.8);
    transition: 0.2s;
  }
  
  @media(min-width: 1280px) {
    margin: 32px auto 0;
  }
  @media(min-width: 1920px) {
    width: 219px;
    height: 56px;
    font-size: 20px;
    line-height: 25px;
    border-radius: 18px;
  }
`;

export const Rhombs = styled.div`
  background: url("/assets/icons/features/rhombs.png") no-repeat;
  background-size: cover;
  width: 211px;
  height: 160px;
  position: absolute;
  top: -26px;
  right: -141px;
  z-index: -1;
`;
