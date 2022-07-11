import styled from "styled-components";
import {DeviceWidth} from "../../../../../styles/global";

export const WrapperTrans = styled(DeviceWidth)`
  display: flex;
  width: 100%;
  height: 1070px;
  background: #F7F7F7;
  border-radius: 0 50px 50px 0;
  transform: skewY(8deg);
  margin: 70px 0 0;
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
`;

export const FormBlock = styled.div`
  width: 375px;
  margin: 33px 0 0;
  padding: 16px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%);
  border-radius: 36px;
`;

export const FormBlockInner = styled.div`
  width: 343px;
  background: #FFFFFF;
  border-radius: 32px;
`;
export const Title = styled.div`
  margin: 0 auto;
  padding: 40px 53px 0 56px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #212121;
  & span {
    color: #FF474D;
  }
`;
export const Inputs = styled.div`
  margin: 32px auto 0;
  width: 295px;
`;

export const Input = styled.div`
  margin: 0 0 16px;
  &:last-child {
    margin: 0 0 0;
  }
    & input {
      margin: 8px 0 0;
      padding: 11px 0 12px 16px;
      border: none;
      width: 100%;
      height: 40px;
      background: #F3F4F5;
      border-radius: 8px;
      &::placeholder {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #BDBDBD;
      }
    }
`;

export const InputTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #5C5C5C;
`;

export const Button = styled.button`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #FF474D;
  border: none;
  border-radius: 16px;
  padding: 14px 64px;
  margin: 48px 83px 0 80px;
`;

export const TextAfterButton = styled.div`
  position: relative;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin: 12px 103px 0 101px;
  padding: 0 0 40px;
  color: #BDBDBD;
  &::after {
    position: absolute;
    content: url("/assets/icons/hands-emoji.png");
    width: 15px;
    height: 16px;
    top: -1px;
    right: 0;
  }
`;

export const Map = styled.img`
  min-width: 559px;
  max-width: 559px;
  margin: 29px 0 0 -188px;
`;






