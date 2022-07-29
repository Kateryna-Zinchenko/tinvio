import styled from "styled-components";

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #212121;
  margin: 180px 0 0;
  padding: 0 16px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 0 50px 50px 0;
  background: #363636;
  margin: 24px 0 0;
  overflow: hidden;
`;

export const Options = styled.div`
  padding: 40px 16px;
`;

export const Option = styled.div`
  margin: 0 0 36px;
  &:last-child {
    margin: 0;
  }
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #FFFFFF;
`;

export const P = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #FAFAFA;
`;

export const Text = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #FFFFFF;
`;

export const Img = styled.img`
  max-width: 462px;
  padding: 40px 0 0;
  margin: 0 -103px 0 0;
  float: right;
`;
