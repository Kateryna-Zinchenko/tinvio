import styled from "styled-components";

export const OpenMenuWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  right: 0;
  z-index: 999;
`;

export const RhombusTop = styled.div`
  position: absolute;
  width: 256px;
  height: 256px;
  top: -30px;
  right: -122px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border-radius: 45px;
  transform: rotate(-45deg);
`;

export const RhombusBottom = styled.div`
  position: absolute;
  width: 239px;
  height: 239px;
  bottom: 25px;
  left: -100px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border-radius: 23px;
  transform: rotate(-45deg);
`;

export const Rhombs = styled.img`
  position: absolute;
  width: 248px;
  bottom: 30px;
  right: -150px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px 0 0;
`;


export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;


export const Logo = styled.img`
  position: relative;
  width: 114px;
  height: 38px;
  cursor: pointer;
`;

export const ChooseLanguage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 34px;
  height: 27px;
  margin: 5px 0 0 24px;
  cursor: pointer;
`;

export const Language = styled.div`
  font-family: 'Gilroy', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #212121;
`;

export const ArrowDown = styled.img`
  width: 10px;
  height: 6px;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
`
export const CloseButton = styled.div`
  display: flex;
  position: relative;
  height: 20px;
  width: 20px;
  transform: rotate(45deg);
  cursor: pointer;

  &:before {
    position: absolute;
    width: 3px;
    height: 28px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #5C5C5C;
    margin: 0;
    border-radius: 100px;
  }

  &:after {
    position: absolute;
    width: 28px;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #5C5C5C;
    margin: 0;
    border-radius: 100px;
  }
`;

export const Pages = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0;
  margin: 235px 0 0;
`;

export const Page = styled.li<{ isActive: boolean }>`
  font-family: 'Gilroy', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${({isActive}) => isActive ? '#FF474D' : '#212121'};
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 0 0 40px;
`;







