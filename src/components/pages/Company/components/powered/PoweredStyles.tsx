import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 140px 0 0;

  @media (min-width: 1024px) {
    margin: 180px 0 0;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  text-align: center;
  color: #212121;

  & span {
    color: #FF474D;
  }

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (min-width: 1024px) {
    font-size: 44px;
    line-height: 52px;
  }
  @media (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

export const ImagesWrapper = styled.div`
  margin: 40px auto 0;

  @media (min-width: 768px) {
    max-width: 736px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    max-width: 944px;
  }
  @media (min-width: 1280px) {
    max-width: 1032px;
  }
  @media (min-width: 1440px) {
    max-width: 1192px;
  }
  @media (min-width: 1920px) {
    max-width: 1312px;
  }
`;

export const Img1 = styled.img`
  width: 343px;
  height: 380px;
  object-fit: cover;
  object-position: 44% 0%;
  background: #C4C4C4;
  border-radius: 32px;
  margin: 16px auto 0;

  &:first-child {
    margin: 0 auto;

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    width: 360px;
    height: 426px;
    margin: 0;
  }
  @media (min-width: 1024px) {
    width: 460px;
    height: 477px;
  }
  @media (min-width: 1280px) {
    width: 515px;
  }
  @media (min-width: 1440px) {
    width: 584px;
  }
  @media (min-width: 1920px) {
    width: 644px;
    height: 481px;
  }
`;

export const Img2 = styled(Img1)`
  height: 313px;
  object-position: 100% 95%;

  @media (min-width: 768px) {
    height: 329px;
  }
  @media (min-width: 1024px) {
    height: 376px;
  }
  @media (min-width: 1280px) {
    width: 493px;
    height: 395px;
  }
  @media (min-width: 1440px) {
    width: 584px;
    height: 408px;
    object-position: 100% 72%;
  }
  @media (min-width: 1920px) {
    width: 644px;
    height: 408px;
  }
`;

export const TextBlock = styled.div`
  width: 343px;
  background: #363636;
  border-radius: 32px;
  margin: 16px auto 0;
  padding: 40px 29px;

  @media (min-width: 768px) {
    width: 360px;
    height: 178px;
    margin: 0;
    padding: 32px 50px;
  }
  @media (min-width: 1024px) {
    width: 460px;
    padding: 32px 71px;
  }
  @media (min-width: 1280px) {
    width: 493px;
    height: 139px;
    padding: 32px 0 32px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1440px) {
    width: 584px;
    height: 114px;
  }
  @media (min-width: 1920px) {
    width: 645px;
    height: 122px;
    padding: 32px;
  }
`;

export const P = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  padding: 0 0 24px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 25px;
    padding: 0 0 16px;
  }
  @media (min-width: 1280px) {
    padding: 0;
    width: 197px;
    text-align: left;
  }
  @media (min-width: 1440px) {
    width: 300px;
  }
  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Img3 = styled(Img1)`
  height: 313px;
  object-position: 100% 50%;

  @media (min-width: 768px) {
    height: 425px;
    padding: 0 0 0 0;
  }
  @media (min-width: 1024px) {
    height: 477px;
  }
  @media (min-width: 1920px) {
    height: 481px;
  }
`;

export const Img4 = styled(Img1)`
  object-position: 56% 0;

  @media (min-width: 768px) {
    height: 328px;
  }
  @media (min-width: 1024px) {
    height: 376px;
  }
  @media (min-width: 1280px) {
    width: 493px;
    height: 395px;
  }
  @media (min-width: 1440px) {
    width: 584px;
    height: 408px;
  }
  @media (min-width: 1920px) {
    width: 644px;
  }
`;
