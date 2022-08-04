import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 80px 0 0;
  padding: 48px 16px;
  width: 100%;
  background: #363636;
  border-radius: 0 50px 50px 0;
  
  @media(min-width: 768px) {
    padding: 48px 89px;
  }
  @media(min-width: 1024px) {
    padding: 55px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media(min-width: 1280px) {
    margin: 80px 0 0 -54px;
    padding: 55px 70px 55px 178px;
  }
  @media(min-width: 1920px) {
    margin: 80px 0 0 -234px;
    padding: 54px 70px 54px 538px;
  }
`;

export const Text = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;

  @media(min-width: 768px) {
    font-size: 32px;
    line-height: 39px;
  }
  @media(min-width: 1024px) {
    max-width: 679px;
    text-align: left;
  }
  @media(min-width: 1280px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media(min-width: 1920px) {
    font-size: 44px;
    line-height: 54px;
    max-width: 866px;
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
  color: #212121;
  background: #FFFFFF;
  border-radius: 16px;
  border: none;
  display: block;
  margin: 24px auto 0;
  cursor: pointer;
  &:hover {
    background: #E0E0E1;
    transition: 0.2s;
  }

  @media(min-width: 1024px) {
    margin: 0;
  }
  @media(min-width: 1920px) {
    width: 219px;
    height: 56px;
    font-size: 20px;
    line-height: 25px;
    border-radius: 18px;
  }
`;
