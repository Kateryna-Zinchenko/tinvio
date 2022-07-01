import styled from "styled-components";

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
  & a:active {
    color: #FF474D;
`;
export const OpenMenuWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  right: 0;
  z-index: 999;
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

export const ChooseLanguage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 34px;
  height: 27px;
  margin: 5px 0 0 24px;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

