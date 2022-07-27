import styled from "styled-components";

export const OpenMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
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
  @media (min-width: 768px) {
    width: 538px;
    height: 538px;
    top: -127px;
    right: -334px;
    border-radius: 95px;
  }
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
  @media (min-width: 768px) {
    width: 457px;
    height: 457px;
    bottom: 38px;
    left: -210px;
    border-radius: 43px;
  }
`;

export const Rhombs = styled.div`
  background: url("/assets/images/rhombs-burger-menu.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 248px;
  bottom: 30px;
  right: -150px;
  @media (min-width: 768px) {
    width: 381px;
    height: 289px;
    bottom: 100px;
    right: -214px;
    background-size: cover;
  }
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

export const ArrowDown = styled.div<{ isOpenLanguage: boolean }>`
  background: url("/assets/images/arrowDown.svg") no-repeat;
  background-size: contain;
  width: 10px;
  height: 6px;
  transform: ${({isOpenLanguage}) => (isOpenLanguage === true ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const LanguageList = styled.div<{ isOpenLanguage: boolean }>`
  display: ${({isOpenLanguage}) => (isOpenLanguage === true ? 'block' : 'none')};
  position: absolute;
  top: 39px;
  left: 131px;
  width: 48px;
  height: 139px;
  background: #FFFFFF;
  box-shadow: 4px 4px 13px 0 rgba(33,33,33,0.1);
  border-radius: 8px;
  margin: 23px 0 0 17px;
`;

export const Flags = styled.div`
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 0;
`;

export const Flag = styled.img`
  width: 24px;
  cursor: pointer;
`;

export const Stick = styled.div`
  width: 24px;
  height: 1px;
  background: #F3F4F5;
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
  @media (min-width: 768px) {
    margin: 293px 0 0;
  }
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

  &:last-child {
    margin: 0 0 0;
  }

  @media (min-width: 768px) {
    margin: 0 0 48px;
  }
`;

export const Footer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  display: block;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 14px 50px;
  margin: 356px auto 0;
  border: none;
  color: #FFFFFF;
  background: #FF474D;
  border-radius: 16px;
  cursor: pointer;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 0;
`;

export const LinksSocial = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;

  & img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

export const LinksStore = styled.div`
  width: 242px;
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 32px;

  & img {
    width: 113px;
    cursor: pointer;
  }
`;






