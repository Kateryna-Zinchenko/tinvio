import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewY(-8deg);
  margin: 148px 0 0;
  border-radius: 50px 0 0 50px;
  width: 100%;
  height: 905px;
  //background: radial-gradient(60.41% 52.5% at 70.4% 57.25%, #FF474D 0%, rgba(255, 130, 134, 0.57) 100%);
  background: #363636;
  //opacity: 0.88;
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
