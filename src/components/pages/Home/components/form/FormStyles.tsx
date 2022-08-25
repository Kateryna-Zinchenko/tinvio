import styled from "styled-components";
import {DeviceWidth} from "../../../../../styles/global";

export const WrapperTrans = styled(DeviceWidth)`
  display: flex;
  width: 100%;
  height: 1070px;
  background: #F7F7F7;
  border-radius: 0 50px 50px 0;
  transform: skewY(8deg);
  margin: 70px 0 112px;
  @media (min-width: 1024px) {
    height: 474px;
    margin: 327px 0 311px;
  }
  @media (min-width: 1280px) {
    height: 474px;
    margin: 327px 0 311px -54px;
  }
  @media (min-width: 1920px) {
    margin: 327px 0 356px;
  }
`;

export const Wrapper = styled(DeviceWidth)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 842px;
  background: #F7F7F7;
  margin: 340px 0 0;
  transform: skewY(-8deg);
  border-radius: 0 0 50px 0;
  @media (min-width: 1024px) {
    height: 397px;
    flex-direction: row;
    align-items: start;
    flex-wrap: wrap;
    padding: 0 40px;
    margin: 373px 0 0;
  }
  @media (min-width: 1280px) {
    padding: 24px 0 0 178px;
  }
  @media (min-width: 1440px) {
    padding: 0 0 0 178px;
  }
  @media (min-width: 1920px) {
    padding: 0 0 0 358px;
    height: 442px;
  }
`;

export const RhombsLeft = styled.div`
  background: url("/assets/images/rhombs-left-form.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 311px;
  height: 236px;
  top: -202px;
  left: -80px;
  z-index: -1;
  @media (min-width: 768px) {
    width: 245px;
    height: 185px;
    top: -150px;
    left: 16px;
  }
  @media (min-width: 1024px) {
    width: 151px;
    height: 114px;
    top: 26px;
    left: 480px;
  }
`;

export const RhombsRight = styled.div`
  background: url("/assets/images/rhombs-left-form.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 458px;
  height: 346px;
  bottom: 468px;
  right: -233px;
  z-index: -1;
  @media (min-width: 768px) {
    bottom: 450px;
    right: -140px;
  }
  @media (min-width: 1024px) {
    width: 351px;
    height: 266px;
    bottom: 38px;
    right: -194px;
  }
`;

export const H1 = styled.div`
  width: 310px;
  font-family: 'Gilroy';
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  text-align: center;
  color: #212121;
  margin: -260px 0 0;
  @media (min-width: 768px) {
    width: 477px;
    font-size: 32px;
    line-height: 39px;
    margin: -240px 0 0;
  }
  @media (min-width: 1024px) {
    width: 448px;
    line-height: 38px;
    text-align: left;
  }
  @media (min-width: 1280px) {
    width: 477px;
    font-size: 36px;
    line-height: 42px;
  }
  @media (min-width: 1920px) {
    width: 580px;
    font-size: 44px;
    line-height: 54px;
  }
`;

export const LoginFormWrapper = styled.div`

  @media (min-width: 1024px) {
    margin: -238px 0 0 7px;
  }
  @media (min-width: 1280px) {
    margin: -238px 0 0 66px;
  }
  @media (min-width: 1440px) {
    margin: -238px 0 0 226px
  }
`;

export const Map = styled.img`
  min-width: 559px;
  max-width: 559px;
  margin: 29px 0 0 -188px;
  @media (min-width: 768px) {
    min-width: 699px;
    max-width: 699px;
    margin: -85px 0 0 -164px;
    z-index: -1;
  }
  @media (min-width: 1024px) {
    min-width: 752px;
    max-width: 752px;
    margin: -483px 0 0 -246px;
  }
  @media (min-width: 1280px) {
    min-width: 987px;
    max-width: 987px;
    margin: -699px 0 0 -362px;
  }
  @media (min-width: 1440px) {
    margin: -674px 0 0 -338px;
  }
  @media (min-width: 1920px) {
    margin: -728px 0 0 -233px;
  }
`;






