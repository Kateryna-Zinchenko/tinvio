import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px 0 0;
  @media (min-width: 1024px) {
    position: fixed;
    //background: rgba(255, 255, 255, 0.9);
    //backdrop-filter: blur(24px);
    //z-index: 5;
    padding: 24px 40px 24px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Logo = styled.img`
  position: relative;
  width: 114px;
  height: 38px;
  cursor: pointer;
`;

export const ChooseLanguage = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 34px;
    height: 27px;
    margin: 5px 0 0 24px;
    cursor: pointer;
  }
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
  display: none;
  @media (min-width: 1024px) {
    display: ${({isOpenLanguage}) => (isOpenLanguage === true ? 'block' : 'none')};
    position: absolute;
    top: 39px;
    left: 131px;
    width: 48px;
    height: 139px;
    background: #FFFFFF;
    border: 1px solid grey;
    border-radius: 8px;
  }
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
`;

export const Stick = styled.div`
  width: 24px;
  height: 1px;
  background: #F3F4F5;
`;

export const Pages = styled.ul`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 325px;
    margin: 6px 0 0 137px;
  }
`;

export const Page = styled.li<{ isActive: boolean }>`
  @media (min-width: 1024px) {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: ${({isActive}) => isActive ? '#FF474D' : '#212121'};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    width: 129px;
    height: 40px;
    margin: 0 0 0 181px;
    color: #212121;
    background: #FFFFFF;
    border: none;
    border-radius: 16px;
    cursor: pointer;
  }
`;

export const MenuWrapper = styled.div`
  display: block;
  width: 24px;
  height: 18px;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuRow = styled.div`
  width: 24px;
  height: 3px;
  background: #5C5C5C;
  border-radius: 100px;
  margin-bottom: 5px;
  &:last-child{
    margin-bottom: 0;
  }
`;
