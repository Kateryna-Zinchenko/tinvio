import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 140px 0 0;
`;

export const LeftBlock = styled.div`
  background: #F7F7F7;
  border-radius: 0 32px 32px 0;
  margin: 0 16px 0 0;
  padding: 49px 0 49px 16px;
`;

export const Amount = styled.div`
  font-family: 'Gilroy';
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #212121;
  
  & span {
    color: #FF474D;
  }
`;

export const Caption = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #212121;`;

export const MiddleBlock = styled.div`
  background: #F7F7F7;
  border-radius: 32px;
  margin: 16px 16px 0;
  padding: 49px 0;
`;

export const RightBlock = styled.div`
  background: #F7F7F7;
  border-radius: 32px 0 0 32px;
  margin: 16px 0 0 16px;
  padding: 49px 16px 49px 0;
`;
