import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 120px 0 0;

  @media (min-width: 768px) {
    margin: 141px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 80px 0 0;
    display: flex;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  padding: 0 16px;
  
  @media (min-width: 1024px) {
    padding: 0 0 0 40px;
  }
  @media (min-width: 1280px) {
    padding: 0 0 0 124px;
  }
  @media (min-width: 1920px) {
    padding: 0 0 0 304px;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #212121;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
    max-width: 457px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    text-align: left;
    max-width: 410px
  }
  @media (min-width: 1280px) {
    font-size: 40px;
    line-height: 49px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    font-size: 44px;
    line-height: 52px;
    max-width: 458px;
  }
  @media (min-width: 1920px) {
    line-height: 54px;
  }
`;

export const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #5C5C5C;
  padding: 12px 0 0;
  
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
    padding: 13px 0 0;
  }
  @media (min-width: 1024px) {
    padding: 16px 0 0;
    max-width: 340px;
  }
  @media (min-width: 1280px) {
    max-width: 440px;
  }
  @media (min-width: 1440px) {
    line-height: 150%;
  }
  @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 25px;
    max-width: 510px;
  }
`;

export const BoxWrapper = styled.div`
  position: relative;
  max-width: 576px;
  height: 576px;
  margin: 24px auto 0;
  
  @media (min-width: 768px) {
    margin: 40px auto 0;
    max-width: 792px;
    height: 792px;
  }
  @media (min-width: 1024px) {
    margin: 0 0 0 357px;
  }
  @media (min-width: 1280px) {
    margin: 0 0 0 440px;
  }
  @media (min-width: 1440px) {
    margin: 0 0 0 520px;
  }
  @media (min-width: 1920px) {
    
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 406px;
  height: 406px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
  border-radius: 40px;
  transform: translate(-50%, -50%) rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    width: 560px;
    height: 560px;
    border-radius: 56px;
  }
`;
export const BoxInner = styled.div`
  width: 355px;
  height: 355px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 491px;
    height: 491px;
    border-radius: 56px;
  }
`;
export const ContentBox = styled.div`
  position: relative;
  transform: rotate(-45deg);
  min-width: 375px;
  max-width: 375px;
  height: 576px;
  @media (min-width: 768px) {
    min-width: 792px;
    max-width: 792px;
    height: 792px;
  }
`;
export const Tab1 = styled.img`
  position: absolute;
  top: 143px;
  left: 82px;
  width: 222px;
  z-index: 1;
  @media (min-width: 768px) {
    top: 169px;
    left: 233px;
    width: 302px;
  }
`;
export const ArrowRight = styled.img`
  position: absolute;
  top: 168px;
  right: 84px;
  width: 88px;
  @media (min-width: 768px) {
    top: 203px;
    right: 273px;
    width: 120px;
  }
`;
export const ArrowCenter = styled.img`
  position: absolute;
  top: 177px;
  left: 115px;
  width: 72px;
  @media (min-width: 768px) {
    top: 215px;
    left: 278px;
    width: 98px;
  }
`;
export const ArrowLeft = styled.img`
  position: absolute;
  bottom: 204px;
  left: 101px;
  width: 86px;
  @media (min-width: 768px) {
    bottom: 302px;
    left: 270px;
    width: 117px;
  }
`;
export const StarsWoman = styled.div`
  background: url("/assets/icons/features/breeze-orders-stars-woman.png") no-repeat;
  background-size: contain;
  position: absolute;
  top: 216px;
  right: -4px;
  width: 74px;
  height: 61px;
  @media (min-width: 768px) {
    top: 252px;
    right: 160px;
    width: 92px;
  }
`;
export const StarsMan = styled.div`
  @media (min-width: 768px) {
    background: url("/assets/icons/features/breeze-orders-stars-man.png") no-repeat;
    background-size: contain;
    position: absolute;
    top: 358px;
    left: 89px;
    width: 72px;
    height: 66px;
  }
`;
export const Tab2 = styled.img`
  position: absolute;
  top: 226px;
  left: 0;
  width: 242px;
  z-index: 1;
  @media (min-width: 768px) {
    top: 278px;
    left: 120px;
    width: 330px;
  }
`;
export const ImgWoman = styled.img`
  position: absolute;
  top: 236px;
  right: 24px;
  width: 91px;
  z-index: 1;
  @media (min-width: 768px) {
    top: 306px;
    right: 189px;
    width: 124px;
  }
`;
export const ImgMan = styled.img`
  position: absolute;
  bottom: 182px;
  left: 16px;
  width: 91px;
  z-index: 1;
  @media (min-width: 768px) {
    bottom: 273px;
    left: 119px;
    width: 124px;
  }
`;

export const ConfirmOrder = styled.div`
  position: absolute;
  bottom: 149px;
  right: 21px;
  z-index: 1;
  @media (min-width: 768px) {
    bottom: 229px;
    right: 190px;
  }
`;

export const MainBox = styled.div`
  width: 211px;
  height: 65px;
  background: #FFFFFF;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 287px;
    height: 88px;
    border-radius: 14px;
  }
`;

export const InnerBox = styled.div`
  padding: 10px 8px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 14px 10px;
  }
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: #212121;
  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Price = styled(Title)`
  font-weight: 700;
`;

export const Button = styled.button`
  width: 100%;
  height: 35px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 10.2758px;
  line-height: 13px;
  color: #FFFFFF;
  background: #FF474D;
  border: none;
  border-radius: 10px;
  display: block;
  @media (min-width: 768px) {
    height: 47px;
    font-size: 14px;
    line-height: 17px;
  }
`;

