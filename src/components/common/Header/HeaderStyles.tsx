import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px 0 0;
`;

export const HeaderWrapper = styled.div`
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

export const ChooseLanguage = styled.div<{ isOpenMenu: boolean }>`
  display: ${({ isOpenMenu }) => isOpenMenu ? 'flex' : 'none'};
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