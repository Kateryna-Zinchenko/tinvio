import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 104px 0 0;
  @media (min-width: 768px) {
    margin: 144px 0 0;
  }
`;

export const RhombusLeft = styled.div`
  position: absolute;
  top: -39px;
  left: -147px;
  width: 219px;
  height: 219px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, #DADADA 0%, #FAFAFA 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  opacity: 0.1;
  border-radius: 21px;
  transform: rotate(-45deg);
  @media (min-width: 768px) {
    width: 360px;
    height: 360px;
    border-radius: 34px;
    top: -65px;
    left: -164px;
  }
`;

export const RhombusRight = styled.div`
  position: absolute;
  width: 273px;
  height: 273px;
  right: -193px;
  top: -103px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
  border-radius: 26px;
  transform: rotate(-45deg);
  @media (min-width: 768px) {
    display: none;
  }
`;

export const RhombusLeftBottom = styled.div`
  position: absolute;
  width: 273px;
  height: 273px;
  left: -185px;
  top: 287px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
  border-radius: 26px;
  transform: rotate(-45deg);
  @media (min-width: 768px) {
    width: 372px;
    height: 372px;
    border-radius: 35px;
    top: 134px;
    left: -216px;
  }
`;

export const RhombsLeft = styled.div`
  background: url("/assets/images/rhombs-business.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 151px;
  height: 115px;
  top: 296px;
  left: -134px;
  @media (min-width: 768px) {
    width: 249px;
    height: 188px;
    top: 451px;
    left: -140px;
  }
`;

export const RhombsRight = styled.div`
  @media (min-width: 768px) {
    background: url("/assets/images/rhombs-business.png") no-repeat;
    background-size: contain;
    position: absolute;
    width: 381px;
    height: 289px;
    top: -132px;
    right: -116px;
    z-index: -1;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #212121;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 39px;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 106px;
  @media (min-width: 768px) {
    width: 154px;
    height: 154px;
  }
`;

export const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 74px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(246, 245, 245, 0.5) 0%, rgba(250, 250, 250, 0.5) 100%)  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border-radius: 8px;
  transform: rotate(45deg);
  @media (min-width: 768px) {
    width: 111px;
    height: 108px;
    border-radius: 15px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 57px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.8) 0%, rgba(250, 250, 250, 0.8) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 83px;
    height: 83px;
    border-radius: 12px;
  }
`;

export const BoxImg1 = styled.img`
    transform: rotate(-45deg);
    width: 39px;
    height: 35px;
  @media (min-width: 768px) {
    width: 56px;
    height: 51px;
  }
`;
export const BoxImg2 = styled(BoxImg1)`
    width: 41px;
    height: 25px;
  @media (min-width: 768px) {
    width: 59px;
    height: 36px;
  }
`;
export const BoxImg3 = styled(BoxImg1)`
    width: 37px;
    height: 38px;
  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
  }
`;
export const BoxImg4 = styled(BoxImg1)`
    width: 31px;
    height: 38px;
  @media (min-width: 768px) {
    width: 45px;
    height: 54px;
  }
`;
export const BoxImg5 = styled(BoxImg1)`
    width: 39px;
    height: 39px;
  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;
export const BoxImg6 = styled.img`
  transform: rotate(-225deg);
    width: 32px;
    height: 39px;
  @media (min-width: 768px) {
    width: 50px;
    height: 56px;
  }
`;
export const BoxImg7 = styled(BoxImg6)`
    width: 37px;
    height: 38px;
  @media (min-width: 768px) {
    width: 54px;
    height: 55px;
  }
`;
export const BoxImg8 = styled(BoxImg6)`
    width: 49px;
    height: 17px;
  @media (min-width: 768px) {
    width: 77px;
    height: 25px;
  }
`;
export const BoxImg9 = styled(BoxImg6)`
    width: 38px;
    height: 31px;
  @media (min-width: 768px) {
    width: 54px;
    height: 45px;
  }
`;

export const BoxImg10 = styled(BoxImg6)`
    width: 47px;
    height: 43px;
  @media (min-width: 768px) {
    width: 68px;
    height: 63px;
  }
`;


export const Boxes1 = styled.div`
  max-width: 106px;
  @media (min-width: 768px) {
    max-width: 154px;
  }
`;


export const Boxes2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 231px;
  margin: -45px 0 0;
  @media (min-width: 768px) {
    width: 451px;
  }
`;

export const Boxes3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 363px;
  margin: -38px 0 0;
  @media (min-width: 768px) {
    width: 736px;
  }
`;

export const BoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px 0 0;
`;

export const BoxesWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -95px 0 0;
  transform: rotate(180deg);
  @media (min-width: 768px) {
    margin: -185px 0 0;
  }
`;
export const BigBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 343px;
  height: 343px;
  margin: -95px 0 0;
  @media (min-width: 768px) {
    width: 490px;
    height: 490px;
    margin: -185px 0 0;
  }
`;
export const PurpleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 243px;
  height: 243px;
  background: rgba(251, 36, 43, 0.3);
  border-radius: 18px;
  transform: rotate(-45deg);
  @media (min-width: 768px) {
    width: 347px;
    height: 347px;
    border-radius: 26px;
  }
`;
export const MiddleBox = styled(PurpleBox)`
  width: 215px;
  height: 215px;
  background: rgba(251, 36, 43, 0.4);
  transform: rotate(0deg);
  @media (min-width: 768px) {
    width: 308px;
    height: 308px;  
  }
`;
export const RedBox = styled(MiddleBox)`
  height: 182px;
  width: 182px;
  background: #FB242B;
  @media (min-width: 768px) {
    width: 259px;
    height: 259px;
  }
`;
export const BoxInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 258px;
  width: 182px;
  transform: rotate(45deg);
  @media (min-width: 768px) {
    & img {
      width: 196px;
      height: 73px;
      margin: 17px 0 0;
    }
  }
`;
export const Text = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  padding: 78px 0 13px;
  color: #FFFFFF;
  @media (min-width: 768px) {
    width: 262px;
    font-size: 32px;
    line-height: 39px;
    padding: 57px 0 0;
  }
`;
