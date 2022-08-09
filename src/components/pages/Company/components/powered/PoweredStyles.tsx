import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 140px 0 0;
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
`;

export const ImagesWrapper = styled.div`
  margin: 41px 0 0;
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
  }
`;

export const Img2 = styled(Img1)`
  height: 313px;
  object-position: 100% 95%;
`;

export const TextBlock = styled.div`
  width: 343px;
  background: #363636;
  border-radius: 32px;
  margin: 16px auto 0;
  padding: 40px 29px;
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
`;

export const Img3 = styled(Img1)`
  height: 313px;
  object-position: 100% 50%;
`;

export const Img4 = styled(Img1)`
  object-position: 56% 0;
`;
