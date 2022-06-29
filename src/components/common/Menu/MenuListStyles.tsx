import styled from "styled-components";

export const Pages = styled.ul<{ isOpenMenu: boolean }>`
  display: ${({ isOpenMenu }) => isOpenMenu ? 'flex' : 'none'};
  height: 146px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0;
  margin: 235px 0 0 0;
`;

export const Page = styled.li<{isActive: boolean}>`
  font-family: 'Gilroy',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${({isActive}) => isActive ? '#FF474D' : '#212121'};
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
& a:active{
  color: #FF474D;
`;

