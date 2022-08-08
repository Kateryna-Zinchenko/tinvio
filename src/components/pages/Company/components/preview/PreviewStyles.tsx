import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 143px 0 0;
`;

export const StarsTop = styled.div`
  background: url("/assets/icons/company/preview-stars-top.png") no-repeat;
  background-size: contain;
  width: 89px;
  height: 63px;
  position: absolute;
  top: -24px;
  left: -21px;
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-size: 44px;
  line-height: 52px;
  text-align: center;
  color: #212121;
  position: relative;

  & span {
    color: #FF474D;
  }
`;

export const P = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #5C5C5C;
  padding: 17px 0 0;
`;

export const Img = styled.div`
  position: relative;
  width: fit-content;
  margin: 40px auto 0;
`;

export const MainImg = styled.img`
  width: 286px;
`;

export const Stars = styled.div`
  background: url("/assets/icons/company/preview-stars.png") no-repeat;
  background-size: contain;
  width: 147px;
  height: 141px;
  position: absolute;
  top: 171px;
  right: -50px;
`;

export const TextWrapper = styled.div`
  background: #F7F7F7;
  border-radius: 0 32px 32px 0;
  margin: 39px 0 0;
  padding: 48px 40px;
`;

export const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #5C5C5C;

  & p {
    padding: 30px 0 0;
  }
`;

export const Button = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #212121;
  display: block;
  width: 188px;
  height: 48px;
  border: none;
  background: #FFFFFF;
  border-radius: 16px;
  margin: 32px auto 0;
  padding: 14px 42px 14px 63px;
  position: relative;

  &::before {
    content: '';
    background: url("/assets/icons/company/preview-chat.png");
    background-size: contain;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 17px;
    left: 41px;
  }
`;
