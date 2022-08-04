import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 120px auto 0;
  padding: 0 16px;

  @media(min-width: 768px) {
    margin: 140px auto 0;
  }
  @media(min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0 40px;
    max-width: 1024px;
  }
  @media(min-width: 1280px) {
    padding: 0 146px 0 0;
    max-width: 1280px;
  }
  @media(min-width: 1440px) {
    max-width: 1440px;
    padding: 0 192px 0 0;
  }
  @media(min-width: 1920px) {
    max-width: 1920px;
    padding: 0 304px;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #212121;
  max-width: 301px;
  margin: 0 auto;

  @media(min-width: 768px) {
    font-size: 44px;
    line-height: 52px;
    max-width: 414px;
  }
  @media(min-width: 1024px) {
    text-align: left;
    margin: 0 0 0 64px;
    max-width: 229px;
  }
  @media(min-width: 1280px) {
    font-size: 48px;
    line-height: 59px;
    max-width: 252px;
  }
  @media(min-width: 1440px) {
    font-size: 56px;
    line-height: 69px;
    max-width: 288px;
  }
  @media(min-width: 1920px) {
    font-size: 56px;
    line-height: 69px;
    max-width: 446px;
    margin: 0 0 0 60px;
  }
`;

export const ImagesWrapper = styled.div`
  margin: 45px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 343px;

  @media(min-width: 768px) {
    max-width: 736px;
  }
  @media(min-width: 1024px) {
    max-width: 644px;
    min-width: 644px;
    margin: 0;
  }
  @media(min-width: 1280px) {
    max-width: 694px;
    min-width: 694px;
  }
  @media(min-width: 1440px) {
    max-width: 772px;
    min-width: 772px;
  }
  @media(min-width: 1920px) {
    max-width: 806px;
    min-width: 806px;
  }
`;

export const Img1 = styled.img`
  width: 164px;
  height: 230px;
  object-fit: cover;
  object-position: 27% 50%;
  border-radius: 30px;

  @media(min-width: 768px) {
    width: 360px;
    height: 300px;
  }
  @media(min-width: 1024px) {
    object-position: 20% 50%;
    width: 310px;
  }
  @media(min-width: 1280px) {
    width: 335px;
    object-position: 8% 50%;
  }
  @media(min-width: 1440px) {
    width: 374px;
    object-position: 0 50%;
  }
  @media(min-width: 1920px) {
    width: 389px;
  }
`;

export const Img2 = styled(Img1)`
  height: 260px;
  object-position: 38% 50%;

  @media(min-width: 768px) {
    width: 360px;
    height: 376px;
    object-position: 43% 50%;
  }
  @media(min-width: 1024px) {
    width: 310px;
    object-position: 44% 50%;
  }
  @media(min-width: 1280px) {
    width: 335px;
    object-position: 36% 50%;
  }
  @media(min-width: 1440px) {
    width: 374px;
    object-position: 20% 50%;
  }
  @media(min-width: 1920px) {
    width: 393px;
    object-position: 24% 50%;
  }
`;

export const Img3 = styled(Img1)`
  height: 260px;
  object-position: 34% 50%;
  margin: -14px 0 0;

  @media(min-width: 768px) {
    width: 360px;
    height: 376px;
    object-position: 17% 50%;
    margin: -60px 0 0;
  }
  @media(min-width: 1024px) {
    width: 310px;
    object-position: 24% 50%;
    margin: -52px 0 0;
  }
  @media(min-width: 1280px) {
    width: 335px;
  }
  @media(min-width: 1440px) {
    width: 374px;
    object-position: 14% 50%;
  }
  @media(min-width: 1920px) {
    width: 389px;
    object-position: 16% 50%;
  }
`;

export const Img4 = styled(Img1)`
  height: 230px;
  object-position: 79% 50%;
  margin: 16px 0 0;

  @media(min-width: 768px) {
    width: 360px;
    height: 300px;
    object-position: 72% 50%;
  }
  @media(min-width: 1024px) {
    width: 310px;
    object-position: 48% 50%;
    margin: 24px 0 0;
  }
  @media(min-width: 1280px) {
    width: 335px;
    object-position: 60% 50%
  }
  @media(min-width: 1440px) {
    width: 374px;
    object-position: 0 50%
  }
  @media(min-width: 1920px) {
    width: 393px;
  }
`;
