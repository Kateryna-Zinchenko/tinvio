import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 104px 0 0;
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
`;

export const Rhombs = styled.img`
  position: absolute;
  width: 151px;
  top: 296px;
  left: -134px;
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
`;

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 106px;
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
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 57px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.8) 0%, rgba(250, 250, 250, 0.8) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border-radius: 5px;
`;

export const BoxImg1 = styled.img`
    transform: rotate(-45deg);
    width: 39px;
    height: 35px;
`;
export const BoxImg2 = styled(BoxImg1)`
    width: 41px;
    height: 25px;
`;
export const BoxImg3 = styled(BoxImg1)`
    width: 37px;
    height: 38px;
`;
export const BoxImg4 = styled(BoxImg1)`
    width: 31px;
    height: 38px;
`;
export const BoxImg5 = styled(BoxImg1)`
    width: 39px;
    height: 39px;
`;
export const BoxImg6 = styled.img`
  transform: rotate(-225deg);
    width: 32px;
    height: 39px;
`;
export const BoxImg7 = styled(BoxImg6)`
    width: 37px;
    height: 38px;
`;
export const BoxImg8 = styled(BoxImg6)`
    width: 49px;
    height: 17px;
`;
export const BoxImg9 = styled(BoxImg6)`
    width: 38px;
    height: 31px;
`;
export const BoxImg10 = styled(BoxImg6)`
    width: 47px;
    height: 43px;
`;


export const Boxes1 = styled.div`
  max-width: 106px;
`;


export const Boxes2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 231px;
  margin: -45px 0 0;
`;

export const Boxes3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 363px;
  margin: -38px 0 0;
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
`;
export const BigBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 343px;
  height: 343px;
  margin: -95px 0 0;
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
`;
export const MiddleBox = styled(PurpleBox)`
  width: 215px;
  height: 215px;
  background: rgba(251, 36, 43, 0.4);
  transform: rotate(0deg);

`;
export const RedBox = styled(MiddleBox)`
  height: 182px;
  width: 182px;
  background: #FB242B;
`;
export const BoxInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 258px;
  width: 182px;
  transform: rotate(45deg);
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
`;
