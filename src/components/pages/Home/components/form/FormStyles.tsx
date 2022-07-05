import styled from "styled-components";
import {DeviceWidth} from "../../../../../styles/global";

export const WrapperTrans = styled(DeviceWidth)`
  display: flex;
  width: 100%;
  height: 1128px;
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
  height: 1070px;
  background: #F7F7F7;
  margin: 78px 0 0;
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
`;

export const FormBlock = styled.form`
  margin: 33px 0 0;
`;
export const Text = styled.div`
  
`;
export const Title = styled.div`
  
`;




