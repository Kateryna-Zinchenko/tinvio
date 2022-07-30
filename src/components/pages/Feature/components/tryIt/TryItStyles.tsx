import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 16px;
  margin: 133px 0 0;
  position: relative;
  
`;

export const Stars = styled.div`
  background: url("/assets/icons/features/try-it-stars.png") no-repeat;
  background-size: contain;
  width: 48px;
  height: 49px;
  position: absolute;
  top: -17px;
  left: 23px;
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #212121;
`;

export const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #5C5C5C;
  padding: 16px 0 0;
`;

export const Button = styled.div`
  width: 188px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #FF474D;
  border-radius: 16px;
  padding: 14px 45px 14px 46px;
  margin: 32px auto 0;
  cursor: pointer;
`;

export const Images = styled.div`
  position: relative;
  margin: 48px auto 0;
  max-width: 375px;
`;

export const ImgMain = styled.img`
  width: 343px;
  height: 400px;
  object-fit: cover;
  object-position: 100% 0;
  border-radius: 44px;
`;

export const ImgMessage = styled.img`
  position: absolute;
  top: 44px;
  right: -21px;
  max-width: 189px;
`;

export const ImgShare = styled.img`
  position: absolute;
  bottom: -95px;
  right: -49px;
  max-width: 261px;
`;
