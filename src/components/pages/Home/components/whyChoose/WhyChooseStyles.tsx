import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewY(-8deg);
  margin: 148px 0 0;
  border-radius: 50px 0 0 50px;
  width: 100%;
  height: 905px;
  background: #363636;
`;

export const Stars = styled.img`
  position: absolute;
  width: 356px;
  height: 217px;
  top: -204px;
  right: 4px;
`;

export const Inner = styled.div`
  position: relative;
  transform: skewY(8deg);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  display: flex;
  align-items: center;
  padding: 110px 0 0;
  color: #FFFFFF;
`;

export const Image = styled.img`
  width: 343px;
  height: 550px;
  margin: 32px -32px 0 0;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: space-between;
  width: 105px;
  padding: 24px 0 0;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-radius: 2px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%)
`;

export const Dot2 = styled(Dot)`
  background: radial-gradient(136.24% 142.18% at 50% 50%, #FFFFFF 0%, rgba(250, 250, 250, 0.8) 100%);
`;

export const RhombsBottom = styled.img`
  position: absolute;
  width: 412px;
  height: 312px;
  bottom: 0;
  left: -134px;
  
`;
