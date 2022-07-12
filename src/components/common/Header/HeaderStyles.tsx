import styled from "styled-components";

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

export const MenuWrapper = styled.div`
  display: block;
  width: 24px;
  height: 18px;
  cursor: pointer;
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
