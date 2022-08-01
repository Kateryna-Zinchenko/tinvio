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

export const MainBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 406px;
  height: 406px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
  transform: translate(-50%, -50%) rotate(-45deg);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxInner = styled.div`
  width: 355px;
  height: 355px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%);
  border-radius: 40px;
`;

export const Rhombs = styled.div`
  background: url("/assets/icons/features/rhombs.png") no-repeat;
  background-size: cover;
  width: 233px;
  height: 176px;
  position: absolute;
  top: 13px;
  right: -46px;
`;

export const DeviceLeft = styled.img`
  width: 191px;
  position: absolute;
  bottom: 49px;
  left: -10px;
`;

export const DeviceRight = styled.img`
  width: 343px;
  position: absolute;
  top: 61px;
  right: -91px;
`;