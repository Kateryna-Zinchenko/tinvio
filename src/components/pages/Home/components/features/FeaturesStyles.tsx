import styled from "styled-components";

export const WrapperCommon = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 106px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: flex-start;
    margin: 342px 0 0 0;
    padding: 0 0 0 40px;
  }
  @media (min-width: 1280px) {
    padding: 0 0 0 124px;
  }
  @media (min-width: 1920px) {
    padding: 0 0 0 304px;
  }
`;

export const Rhombus = styled.div`
  position: absolute;
  width: 376px;
  height: 376px;
  top: 77px;
  left: -281px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%) ;
  border-radius: 23px;
  transform: rotate(-45deg);
  z-index: -1;
  @media (min-width: 768px) {
    width: 478px;
    height: 478px;
    top: 45px;
    left: -402px;
    border-radius: 29px;
  }
  @media (min-width: 1024px) {
    top: -97px;
    left: -274px;
  }
`;

export const H1 = styled.div`
  position: relative;
  width: 345px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  margin: 0 auto;
  color: #212121;
  & span {
    position: relative;
    font-weight: 700;
    color: #FF474D;
  }
  & span::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 36px;
    top: 0;
    right: -2px;
    background: #212121;
  }
  @media (min-width: 768px) {
    width: 394px;
    font-size: 32px;
    line-height: 39px;
  }
  @media (min-width: 1024px) {
    text-align: left;
    margin: 0;
  }
  @media (min-width: 1280px) {
    width: 442px;
    font-size: 36px;
    line-height: 44px;
    & span::after {
      height: 40px;
      top: 4px;
    }
  }
  @media (min-width: 1920px) {
    width: 540px;
    font-size: 44px;
    line-height: 54px;
    & span::after {
      top: 10px;
    }
  }
`;

export const Options = styled.div`
  margin: 24px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Option = styled.button<{ isOption: string }>`
  margin: 0 8px 0 0;
  width: 87px;
  height: 40px;
  background: #EDEDED;
  border: none;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #212121;
  cursor: pointer;
  border: ${({isOption}) => (isOption === 'chats' ? '1px solid #212121' : 'none')};
  &:last-child {
    margin: 0 0 0 0;
  }
  &:hover {
    border: 1px solid #212121;
  }
  @media (min-width: 768px) {
    width: 107px;
  }
  @media (min-width: 1280px) {
    margin: 0 16px 0 0;
  }
`;

export const Option2 = styled(Option)`
  width: 87px;
  border: ${({isOption}) => (isOption === 'orders' ? '1px solid #212121' : 'none')};
  @media (min-width: 768px) {
    width: 114px;
  }
`;

export const Option3 = styled(Option)`
  width: 114px;
  border: ${({isOption}) => (isOption === 'payments' ? '1px solid #212121' : 'none')};
  @media (min-width: 768px) {
    width: 134px;
  }
`;


export const Text1 = styled.ul<{ isOption: string }>`
  display: ${({isOption}) => (isOption === 'chats' ? 'block' : 'none')};
  width: 334px;
  margin: 24px 0 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
  @media (min-width: 768px) {
    width: 489px;
    margin: 24px 0 0 79px;
    font-size: 16px;
    line-height: 23px;
  }
  @media (min-width: 1024px) {
    margin: 24px 0 0;
    width: 425px;
  }
  @media (min-width: 1280px) {
    margin: 24px 0 0;
    width: 488px;
  }
  @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 23px;
    width: 547px;
  }
`;

export const Text2 = styled(Text1)<{ isOption: string }>`
  display: ${({isOption}) => (isOption === 'orders' ? 'block' : 'none')};
`;

export const Text3 = styled(Text1)<{ isOption: string }>`
  display: ${({isOption}) => (isOption === 'payments' ? 'block' : 'none')};
`;

export const Li = styled.div`
  position: relative;
  margin: 0 0 8px 0;

  &:last-child {
    margin: 0 0 0 0;
  }
  
  & li {
    padding: 0 0 0 25px;
  }
`;

export const Dot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 5px;
  left: 2px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, #FF474D 0%, rgba(255, 130, 134, 0.57) 100%);
  border-radius: 2px;
  transform: rotate(-45deg);
  @media (min-width: 1920px) {
    width: 12px;
    height: 12px;
  }
`;

export const RhombsTop = styled.div`
  background: url("/assets/images/rhombs-top-features.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 216px;
  height: 163px;
  top: 257px;
  right: -97px;
  z-index: -1;
  @media (min-width: 768px) {
    width: 243px;
    height: 184px;
    background-size: cover;
    top: 327px;
    right: -105px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Button = styled.button`
  margin: 32px 0 0 0;
  width: 180px;
  height: 48px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  background: #FF474D;
  border-radius: 16px;
  border: none;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    background: rgba(255, 71, 77, 0.8);
    transition: 0.3s;
  }
  
  @media (min-width: 1920px) {
    width: 210px;
    height: 56px;
    font-size: 20px;
    line-height: 25px;
    border-radius: 18px;
  }
`;

export const BlockWrapper1 = styled.div`
  max-width: 375px;
  height: 640px;
  margin: 57px auto 0;
  position: relative;
  @media (min-width: 768px) {
    margin: 131px auto 0;
  }
  @media (min-width: 1024px) {
    margin: 131px auto 0;
  }
  @media (min-width: 1920px) {
    margin: 105px 0 0 372px;
  }
`;

export const Stars = styled.div`
  background: url("/assets/images/stars-features.png") no-repeat;
  background-size: contain;
  width: 124px;
  height: 160px;
  position: absolute;
  top: -16px;
  left: 0;
  @media (min-width: 768px) {
    width: 181px;
    height: 199px;
    top: -32px;
    left: -192px;
  }
  @media (min-width: 1024px) {
    top: 112px;
    left: -294px;
  }
`;

export const RhombsBottom = styled.div`
  background: url("/assets/images/rhombs-bottom-features.png") no-repeat;
  background-size: contain;
  width: 278px;
  height: 210px;
  position: absolute;
  top: 91px;
  right: -38px;
  @media (min-width: 768px) {
    width: 358px;
    height: 271px;
    background-size: cover;
    top: 24px;
    right: -84px;
  }
  @media (min-width: 1024px) {
    width: 313px;
    height: 237px;
    top: 96px;
    right: -361px;
  }
`;


export const PurpleSquare = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 452px;
  height: 452px;
  background: rgba(251, 36, 43, 0.6);
  border-radius: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 581px;
    height: 581px;
    border-radius: 72px;
  }
  @media (min-width: 1024px) {
    width: 560px;
    height: 560px;
    margin: 60px 0 0 115px;
  }
  //@media (min-width: 1920px) {
  //  margin: 40px 0 0 115px;
  //}
`;
export const RedSquare = styled.div`
  width: 395px;
  height: 395px;
  background: #FB242B;
  border-radius: 50px;
  @media (min-width: 768px) {
    width: 509px;
    height: 509px;
    border-radius: 62px;
  }
  @media (min-width: 1024px) {
    width: 490px;
    height: 490px;
    border-radius: 72px;
  }
`;

export const DeviceLeft1 = styled.img<{ isOption:string }>`
  display: ${({isOption}) => (isOption === 'chats' ? 'block' : 'none')};
  width: 246px;
  height: 399px;
  position: absolute;
  top: 81px;
  left: -30px;
  @media (min-width: 768px) {
    width: 320px;
    height: 531px;
    top: -9px;
    left: -110px;
  }
  @media (min-width: 1024px) {
    max-width: 284px;
    height: 472px;
    top: 81px;
    left: -217px;
  }
`;

export const DeviceRight1 = styled.img<{ isOption:string }>`
  display: ${({isOption}) => (isOption === 'chats' ? 'block' : 'none')};
  width: 240px;
  height: 399px;
  position: absolute;
  top: 170px;
  right: -40px;
  transition: 1s;
  @media (min-width: 768px) {
    width: 320px;
    height: 531px;
    top: 114px;
    right: -121px;
  }
  @media (min-width: 1024px) {
    max-width: 284px;
    height: 472px;
    top: 226px;
    right: -342px;;
  }
  @media (min-width: 1280px) {
    top: 226px;
    right: -332px;
  }
`;

export const DeviceLeft2 = styled(DeviceLeft1)<{ isOption:string }>`
  display: ${({isOption}) => (isOption === 'orders' ? 'block' : 'none')};
`;

export const DeviceRight2 = styled(DeviceRight1)<{ isOption:string }>`
  display: ${({isOption}) => (isOption === 'orders' ? 'block' : 'none')};
`;

export const DeviceLeft3 = styled(DeviceLeft1)<{ isOption:string }>`
  display: ${({isOption}) => (isOption === 'payments' ? 'block' : 'none')};
`;

export const DeviceRight3 = styled(DeviceRight1)<{ isOption:string }>`
  display: ${({isOption}) => (isOption === 'payments' ? 'block' : 'none')};
`;


