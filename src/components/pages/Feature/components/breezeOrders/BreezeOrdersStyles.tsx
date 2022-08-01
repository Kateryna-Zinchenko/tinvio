import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 120px 0 0;
`;
export const TextWrapper = styled.div`
  padding: 0 16px;
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
  line-height: 23px;
  color: #5C5C5C;
  padding: 12px 0 0;
`;
export const BoxWrapper = styled.div`
  position: relative;
  max-width: 576px;
  height: 576px;
  margin: 24px auto 0;
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
`;
export const BoxInner = styled.div`
  width: 355px;
  height: 355px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentBox = styled.div`
  position: relative;
  transform: rotate(-45deg);
  min-width: 375px;
  max-width: 375px;
  height: 576px;
`;
export const Tab1 = styled.img`
  position: absolute;
  top: 143px;
  left: 82px;
  width: 222px;
  z-index: 1;
`;
export const ArrowRight = styled.img`
  position: absolute;
  top: 168px;
  right: 84px;
  width: 88px;
`;
export const ArrowCenter = styled.img`
  position: absolute;
  top: 177px;
  left: 115px;
  width: 72px;
`;
export const ArrowLeft = styled.img`
  position: absolute;
  bottom: 204px;
  left: 101px;
  width: 86px;
`;
export const StarsWoman = styled.div`
  background: url("/assets/icons/features/breeze-orders-stars-woman.png") no-repeat;
  background-size: contain;
  position: absolute;
  top: 216px;
  right: -4px;
  width: 74px;
  height: 61px;
`;
export const Tab2 = styled.img`
  position: absolute;
  top: 226px;
  left: 0;
  width: 242px;
  z-index: 1;
`;
export const ImgWoman = styled.img`
  position: absolute;
  top: 236px;
  right: 24px;
  width: 91px;
  z-index: 1;
`;
export const ImgMan = styled.img`
  position: absolute;
  bottom: 182px;
  left: 16px;
  width: 91px;
  z-index: 1;
`;

export const ConfirmOrder = styled.div`
  position: absolute;
  bottom: 149px;
  right: 21px;
  z-index: 1;
`;

export const MainBox = styled.div`
  width: 211px;
  height: 65px;
  background: #FFFFFF;
  border-radius: 10px;
`;

export const InnerBox = styled.div`
  padding: 10px 8px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: #212121;
`;

export const Price = styled(Title)`
  font-weight: 700;
`;

export const Button = styled.button`
  width: 211px;
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
`;

