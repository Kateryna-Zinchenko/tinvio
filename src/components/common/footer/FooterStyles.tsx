import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 112px 0 0;
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 40px;
    margin: 311px 0 73px;
  }
  @media (min-width: 1280px) {
    padding: 0 124px;
    margin: 311px 0 70px;
  }
  @media (min-width: 1920px) {
    padding: 0 304px;
    margin: 356px 0 70px;
  }
`;

export const Logo = styled.img`
  width: 114px;
  height: 38px;
  margin: 40px 0 0;
  cursor: pointer;
  @media (min-width: 768px) {
    margin: 32px 0 0;
  }
`;

export const StickLogo = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    width: 1px;
    height: 32px;
    background: #C4C4C4;
    margin: 31px 24px 0;
  }
`;

export const StickLinks = styled(StickLogo)`
  @media (min-width: 1024px) {
    margin: 0 24px 0;
  }
`;

export const Pages = styled.ul`
  margin: 24px 0 0;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    margin: 30px 0 0;
  }
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
  
  &:hover {
    color: #FF474D;
    transition: 0.3s;
  }
  
  @media (min-width: 768px) {
    margin: 0 56px 0 0;
    font-size: 16px;
    &:last-child {
      margin: 0 0 0;
    }
  }
  @media (min-width: 1024px) {
    margin: 0 24px 0 0;
    &:last-child {
      margin: 0 0 0;
    }
  }
`;

export const Links = styled.div`
  margin: 48px 0 0;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin: 32px 0 0;
  }
  @media (min-width: 1024px) {
    position: absolute;
    right: 40px;
  }
  @media (min-width: 1280px) {
    right: 124px;
  }
  @media (min-width: 1920px) {
    right: 304px;
  }
`;

export const LinksSocial = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  & img {
    width: 32px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    margin: 0 32px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 0 0 0;
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
  @media (min-width: 768px) {
    margin: 0 0 0;
  }
`;

export const FooterText = styled.div`
  margin: 16px 0 0;
  @media (min-width: 768px) {
    margin: 24px 0 16px;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    margin: 171px 0 0;
    position: absolute;
    left: 40px;
  }
  @media (min-width: 1280px) {
    margin: 152px 0 0;
    position: absolute;
    left: 124px;
  }
  @media (min-width: 1920px) {
    left: 304px;
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
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    margin: 2px 0 0;
  }
`;

export const LinksTerms = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  margin: 0 0 0 22px;
  @media (min-width: 768px) {
    width: 182px;
    margin: 0 0 0;
  }
`;

export const PrivacyPolicy = styled.div`
  & a {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #BDBDBD;
    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`;


export const Stick = styled.div`
  width: 1px;
  height: 10px;
  background: #C4C4C4;
  margin: 8px 0 0;
  @media (min-width: 768px) {
    height: 14px;
    margin: 6px 0 0;
  }
`;

export const Stick2 = styled(Stick)`
  @media (min-width: 375px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
    margin: 6px 8px 0 8px;
  }
`;

export const Terms = styled.div`
  & a {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #BDBDBD;
    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`;
