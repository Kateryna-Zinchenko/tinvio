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
  max-width: 375px;
  height: 574px;
  margin: 24px auto 0;
`;

export const PurpleBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 406px;
  height: 406px;
  background: rgba(251, 36, 43, 0.6);
  border-radius: 52px;
  transform: translate(-50%, -50%) rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RedBox = styled.div`
  width: 355px;
  height: 355px;
  background: #FB242B;
  border-radius: 52.1364px;
`;

export const Rhombs = styled.div`
  position: absolute;
  bottom: 76px;
  left: 33px;
  width: 189px;
  height: 143px;
  background: url("/assets/icons/features/rhombs.png") no-repeat;
  background-size: cover;
`;

export const Stars = styled.div`
  position: absolute;
  top: 30px;
  left: 1px;
  width: 58px;
  height: 53px;
  background: url("/assets/icons/features/make-fast-stars.png") no-repeat;
  background-size: cover;
`;

export const DeviceLeft = styled.img`
  width: 240px;
  position: absolute;
  top: 59px;
  left: -22px;
`;

export const DeviceRight = styled.img`
  width: 239px;
  position: absolute;
  bottom: 11px;
  right: -26px;
`;