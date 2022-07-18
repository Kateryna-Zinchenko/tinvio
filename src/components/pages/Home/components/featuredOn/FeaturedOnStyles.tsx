import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 70px 0 0;
  padding: 0 0 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 50px 50px 0;
  width: 100%;
  background: radial-gradient(129.72% 141.01% at 50% 50%, #F7F7F7 0%, #FAFAFA 100%);
  z-index: 1;
  @media (min-width: 768px) {
    margin: 173px 0 0;
  }
`;

export const RhombsTop = styled.div`
  background: url('/assets/images/rhombs-right-featured-on.png') no-repeat;
  background-size: contain;
  position: absolute;
  width: 271px;
  height: 205px;
  top: -97px;
  right: -170px;
  @media (min-width: 768px) {
    right: -93px;
  }
  @media (min-width: 1024px) {
    width: 427px;
    height: 323px;
    top: -225px;
    right: -85px;
  }
`;

export const RhombusLeft = styled.div`
  position: absolute;
  width: 506px;
  height: 506px;
  top: -88px;
  left: -392px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
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
  @media (min-width: 768px) {
    top: -215px;
    right: -457px;
  }
  @media (min-width: 1024px) {
    top: -274px;
    right: -356px;
  }
`;

export const RhombusLeftBottom = styled.div`
  position: absolute;
  width: 627px;
  height: 627px;
  top: 384px;
  left: -389px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 72px;
  transform: rotate(-45deg);
  @media (min-width: 768px) {
    top: 288px;
    left: -280px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
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
  @media (min-width: 768px) {
    top: 667px;
    right: -559px;
}
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
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 39px;
  }
  @media (min-width: 1024px) {
    line-height: 38px;
    padding: 51px 0 0;
  }
`;
export const Border = styled.div`
  height: 1px;
  background: #D2D2D2;
  width: 253px;
  padding: 0 61px 0 63px;
  margin: 24px 0 32px;
  @media (min-width: 768px) {
    width: 336px;
    padding: 0 0 0 0;
    margin: 16px auto 0;
  }
  @media (min-width: 1024px) {
    width: 666px;
    margin: 19px auto 0;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 490px;
    margin: 32px auto 0;
    flex-direction: unset;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    width: 942px;
    margin: 31px auto 0;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export const Icon1 = styled.img`
  width: 189px;
  height: 28px;
  margin: 0 0 48px;
  @media (min-width: 1024px) {
    margin: 0 0 0;
  }
`;

export const Icon2 = styled.img`
  width: 203px;
  height: 40px;
  margin: 0 0 48px;
  @media (min-width: 768px) {
    margin: -44px 0 0 98px;
  }
  @media (min-width: 1024px) {
    margin: 0 0 0;
  }
`;

export const Icon3 = styled.img`
  width: 153px;
  height: 22px;
  margin: 0 0 58px;
  @media (min-width: 768px) {
    margin: 0 0 0 18px;
  }
  @media (min-width: 1024px) {
    margin: 0 0 0;
  }
`;

export const Icon4 = styled.img`
  width: 169px;
  height: 20px;
  @media (min-width: 768px) {
    margin: 20px 0 0 133px;
  }
  @media (min-width: 1024px) {
    margin: 0 0 0;
  }
`;
