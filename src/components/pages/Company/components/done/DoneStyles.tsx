import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 140px 0 0;
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: #212121;
`;

export const TabWrapper1 = styled.div`
  margin: 41px auto 0;
  padding: 40px 16px 40px 40px;
  background: #F7F7F7;
`;

export const Year = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #212121;
`;

export const List = styled.div`
  padding: 16px 0 0;
`;

export const LiWrapper = styled.div`
  padding: 5px 0 0 15px;
  margin: 12px 0 0;
  position: relative;

  &:first-child {
    margin: 0;
  }
`;

export const Li = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #5C5C5C;
  background: #F7F7F7;
  z-index: 11342;
`;

export const DotWrapper = styled.div`
  width: 31px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LightDot = styled.div`
  width: 22px;
  height: 22px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, #FFFFFF 0%, #FFFFFF 100%);
  border-radius: 2px;
  transform: rotate(-45deg);
`;

