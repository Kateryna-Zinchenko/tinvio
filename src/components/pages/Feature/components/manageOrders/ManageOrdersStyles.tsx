import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 16px 0 0;

  @media (min-width: 1024px) {
    margin: 24px 0 0;
    display: flex;
  }
  @media (min-width: 1280px) {
    margin: 24px 0 0 54px;
  }
  @media (min-width: 1920px) {
    margin: 24px 0 0 234px;
  }
`;

export const LeftWrapper = styled.div`
  width: 100%;
  height: 481px;
  background: #F7F7F7;
  border-radius: 48px;
  overflow: hidden;

  @media (min-width: 768px) {
    border-radius: 32px;
  }
  @media (min-width: 1024px) {
    width: 544px;
  }
  @media (min-width: 1280px) {
    width: 574px;
  }
  @media (min-width: 1440px) {
    width: 654px;
  }
  @media (min-width: 1920px) {
    width: 714px;
  }
`;

export const Title1 = styled.div`
  width: fit-content;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #212121;
  margin: 48px auto 0;

  @media (min-width: 768px) {
    line-height: 30px;
  }
  @media (min-width: 1920px) {
    font-size: 28px;
    line-height: 35px;
  }
`;

export const P = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #727272;
  margin: 8px auto 0;
  max-width: 330px;
  
  @media (min-width: 1920px) {
    font-size: 16px;
    margin: 2px auto 0;
  }
`;

export const Img = styled.img`
  margin: 24px auto 0;
`;

export const RightWrapper = styled.div`
  margin: 16px 0 0;
  
  @media (min-width: 1024px) {
    margin: 0 0 0 24px;
    width: 456px;
  }
  @media (min-width: 1280px) {
    width: 628px;
  }
  @media (min-width: 1440px) {
    width: 708px;
  }
  @media (min-width: 1920px) {
    width: 948px;
  }
`;

export const SendWrapper = styled.div`
  padding: 54px 16px;
  background: #363636;
  border-radius: 32px;

  @media (min-width: 768px) {
    padding: 67px 0;
    margin: 0 auto;
    border-radius: 32px 0 0 32px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 343px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 379px;
  }
  @media (min-width: 1920px) {
    margin: 0 0 0 133px;
  }
`;

export const Button = styled.div`
  width: 36px;
  height: 36px;
  background: #F3F4F5;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Clip = styled.div`
  background: url("/assets/icons/features/manage-orders-clip.png") no-repeat;
  width: 15px;
  height: 15px;

  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const File = styled.div`
  background: url("/assets/icons/features/manage-orders-file.png") no-repeat;
  width: 13px;
  height: 15px;

  @media (min-width: 768px) {
    width: 14px;
    height: 16px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  position: relative;
  width: 256px;
  height: 36px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #212121;
  background: #F3F4F5;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 10px 0 11px 15px;

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #BDBDBD;
  }

  @media (min-width: 768px) {
    width: 283px;
    height: 40px;
  }
`;

export const Arrow = styled.div`
  content: '';
  background: url("/assets/icons/features/manage-orders-arrow-right-inactive.svg") no-repeat;
  background-size: contain;
  width: 6px;
  height: 9px;
  position: absolute;
  top: 14px;
  right: 20px;
`;

export const Title2 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
  padding: 24px 0 0;
  
  @media (min-width: 1920px) {
    font-size: 28px;
    line-height: 35px;
    text-align: left;
    margin: 0 0 0 222px;
  }
`;

export const CreateShareWrapper = styled.div`

  @media (min-width: 768px) {
    margin: 16px 0 0;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    margin: 24px 0 0;
  }
`;

export const CreateWrapper = styled.div`
  margin: 16px 0 0;
  padding: 46px 0;
  background: #F7F7F7;
  border-radius: 32px;

  @media (min-width: 768px) {
    margin: 0;
    padding: 44px 0;
    width: 376px;
    background: #363636;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    width: 208px;
    height: 229px;
  }
  @media (min-width: 1280px) {
    width: 275px;
  }
`;

export const ButtonUsdWrapper = styled.div`
  width: 96px;
  height: 96px;
  background: #FFFFFF;
  border-radius: 18px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const ButtonUsdInner = styled.div`
  width: 64px;
  height: 64px;
  background: #B3B4B5;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title3 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #212121;
  padding: 10px 0 0;

  @media (min-width: 768px) {
    color: #FFFFFF;
    padding: 0;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const ShareWrapper = styled.div`
  margin: 16px 0 0;
  padding: 46px 0;
  background: #363636;
  border-radius: 32px;

  @media (min-width: 768px) {
    margin: 0;
    width: 376px;
    background: #F7F7F7;
  }
  @media (min-width: 1024px) {
    width: 224px;
    height: 229px;
  }
  @media (min-width: 1280px) {
    width: 329px;
  }
  @media (min-width: 1440px) {
    width: 409px;
  }
  @media (min-width: 1920px) {
    width: 649px;
  }
`;

export const ButtonShare = styled.img`
  width: 96px;
  margin: 0 auto;
  
  @media (min-width: 1440px) {
    margin: 0 0 0 121px;
  }
`;

export const Title4 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;
  padding: 10px 0 0;

  @media (min-width: 768px) {
    color: #212121;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 29px;
  }
  @media (min-width: 1440px) {
    text-align: left;
    margin: 0 0 0 59px;
  }
`;



