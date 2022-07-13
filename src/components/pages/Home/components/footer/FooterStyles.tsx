import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 112px 0 0;
`;

export const Logo = styled.img`
  width: 114px;
  height: 38px;
  margin: 40px 0 0;
  cursor: pointer;
`;

export const Pages = styled.ul`
  margin: 24px 0 0;
`;

export const Page = styled.li<{ isActive: boolean }>`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  color: ${({isActive}) => isActive ? '#FF474D' : '#212121'};
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 0 0 16px;
  &:last-child {
    margin: 0 0 0;
  }
`;

export const LinksSocial = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  margin: 48px 0 0;
  & img {
    width: 32px;
    cursor: pointer;
  }
`;

export const LinksStore = styled.div`
  width: 242px;
  display: flex;
  justify-content: space-between;
  margin: 16px 0 0;
  & img {
    width: 113px;
    cursor: pointer;
  }
`;

export const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #BDBDBD;
  margin: 16px 0 0;
`;

export const LinksTerms = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  margin: 0 0 0 20px;
`;

export const PrivacyPolicy = styled.div`
  & a {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #BDBDBD;
  }
`;


export const Stick = styled.div`
  width: 1px;
  height: 10px;
  background: #C4C4C4;
  margin: 8px 0 0;
`;

export const Terms = styled.div`
  & a {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #BDBDBD;
  }
`;
