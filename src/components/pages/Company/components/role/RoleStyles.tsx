import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 180px auto 0;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0 40px;
  }
  @media (min-width: 1280px) {
    padding: 0 124px;
  }
  @media (min-width: 1920px) {
    padding: 0 304px;
  }
`;

export const RightWrapper = styled.div`
  @media (min-width: 1024px) {
    margin: 0 0 0 65px;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: #212121;
  position: relative;
  max-width: 525px;
  padding: 0 0 34px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 44px;
    line-height: 52px;
  }
  @media (min-width: 1024px) {
    max-width: 235px;
    text-align: left;
    padding: 0 0 42px;
  }
  @media (min-width: 1280px) {
    max-width: 274px;
    font-size: 48px;
    line-height: 59px;
  }
  @media (min-width: 1440px) {
    max-width: 357px;
  }
  @media (min-width: 1920px) {
    font-size: 56px;
    line-height: 69px;
    max-width: 442px;
  }
`;

export const Stars = styled.div`
  background: url("/assets/icons/company/role-stars.png") no-repeat;
  background-size: contain;
  width: 66px;
  height: 62px;
  position: absolute;
  top: -40px;
  left: 0;

  @media (min-width: 1024px) {
    left: -32px;
  }
`;

export const ImagesWrapper = styled.div`
  margin: 48px auto 0;

  @media (min-width: 768px) {
    margin: 64px auto 0;
    width: 736px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }
  @media (min-width: 1024px) {
    width: 644px;
    margin: 0;
  }
  @media (min-width: 1280px) {
    width: 694px;
  }
  @media (min-width: 1440px) {
    width: 772px;
  }
  @media (min-width: 1920px) {
    width: 806px;
  }
`;

export const Img1 = styled.img`
  width: 343px;
  height: 260px;
  object-fit: cover;
  border-radius: 32px;
  object-position: 44% 0;
  margin: 16px auto 0;

  @media (min-width: 768px) {
    margin: 0;
    width: 360px;
    height: 300px;
  }
  @media (min-width: 1024px) {
    width: 310px;
  }
  @media (min-width: 1280px) {
    width: 335px;
  }
  @media (min-width: 1440px) {
    width: 374px;
  }
  @media (min-width: 1920px) {
    width: 389px;
  }
`;

export const Img2 = styled(Img1)`
  @media (min-width: 768px) {
    width: 360px;
    height: 376px;
  }
  @media (min-width: 1024px) {
    width: 310px;
  }
  @media (min-width: 1280px) {
    width: 335px;
  }
  @media (min-width: 1440px) {
    width: 374px;
  }
  @media (min-width: 1920px) {
    width: 393px;
  }
`;

export const Img3 = styled(Img1)`
  object-position: 16% 0;

  @media (min-width: 768px) {
    width: 360px;
    height: 376px;
    margin: -52px 0 0;
  }
  @media (min-width: 1024px) {
    width: 310px;
  }
  @media (min-width: 1280px) {
    width: 335px;
  }
  @media (min-width: 1440px) {
    width: 374px;
  }
  @media (min-width: 1920px) {
    width: 389px;
  }
`;

export const Img4 = styled(Img1)`
  object-position: 87% 0;

  @media (min-width: 768px) {
    width: 360px;
    height: 308px;
    margin: 16px 0 0;
  }
  @media (min-width: 1024px) {
    width: 310px;
    height: 300px;
    margin: 24px 0 0;
  }
  @media (min-width: 1280px) {
    width: 335px;
  }
  @media (min-width: 1440px) {
    width: 374px;
  }
  @media (min-width: 1920px) {
    width: 393px;
  }
`;
