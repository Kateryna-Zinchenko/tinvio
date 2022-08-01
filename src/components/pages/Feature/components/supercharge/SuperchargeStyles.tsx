import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: #F7F7F7;
  border-radius: 0 50px 50px 0;
  margin: 120px 0 0;
  padding: 48px 16px;
`;

export const Text = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  color: #5C5C5C;
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #212121;
  padding: 9px 0 0;
`;

export const Button = styled.button`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #FF474D;
  border: none;
  border-radius: 16px;
  padding: 14px 50px;
  display: block;
  margin: 24px auto 0;
  cursor: pointer;
  &:hover {
    background: rgba(255, 71, 77, 0.8);
    transition: 0.2s;
  }
`;

export const Rhombs = styled.div`
  background: url("/assets/icons/features/rhombs.png") no-repeat;
  background-size: cover;
  width: 211px;
  height: 160px;
  position: absolute;
  top: -26px;
  right: -141px;
  z-index: -1;
`;
