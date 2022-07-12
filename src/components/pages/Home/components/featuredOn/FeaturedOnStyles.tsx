import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 70px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 50px 50px 0;
  width: 100%;
  height: 451px;
  background: radial-gradient(129.72% 141.01% at 50% 50%, #F7F7F7 0%, #FAFAFA 100%);
  z-index: 1;
`;

export const RhombsTop = styled.img`
  position: absolute;
  width: 271px;
  top: -97px;
  right: -170px;
`;

export const RhombusLeft = styled.div`
  position: absolute;
  width: 506px;
  height: 506px;
  top: -88px;
  left: -392px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border-radius: 95px;
  transform: rotate(-45deg);
`;

export const RhombusRight = styled.div`
  position: absolute;
  width: 506px;
  height: 506px;
  top: 100px;
  right: -468px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, #FFFFFF 0%, #FAFAFA 100%);
  border-radius: 95px;
  transform: rotate(-45deg);
  opacity: 0.5;
`;

export const RhombusLeftBottom = styled.div`
  position: absolute;
  width: 627px;
  height: 627px;
  top: 384px;
  left: -389px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 72px;
  transform: rotate(-45deg) skewY(8deg);
`;

export const RhombusRightBottom = styled.div`
  position: absolute;
  width: 841px;
  height: 841px;
  top: 788px;
  right: -892px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 72px;
  transform: rotate(-45deg) skewY(8deg);
`;

export const H1 = styled.div`
  padding: 49px 0 0;
  font-family: 'Gilroy';
  font-size: 28px;
  line-height: 33px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #212121;

`;
export const Border = styled.div`
  height: 1px;
  background: #D2D2D2;
  width: 253px;
  padding: 0 61px 0 63px;
  margin: 24px 0 32px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon1 = styled.img`
  width: 189px;
  height: 28px;
  margin: 0 0 48px;
`;

export const Icon2 = styled.img`
  width: 203px;
  height: 40px;
  margin: 0 0 48px;
`;

export const Icon3 = styled.img`
  width: 153px;
  height: 22px;
  margin: 0 0 58px;
`;

export const Icon4 = styled.img`
  width: 169px;
  height: 20px;
`;
