import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 120px auto 0;
  padding: 0 16px;
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #212121;
  padding: 0 16px;
`;

export const ImagesWrapper = styled.div`
  margin: 45px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 375px;
`;

export const Img1 = styled.img`
  width: 164px;
  height: 230px;
  object-fit: cover;
  object-position: 27% 50%;
  border-radius: 30px;
`;

export const Img2 = styled(Img1)`
  height: 260px;
  object-position: 38% 50%;
`;

export const Img3 = styled(Img1)`
  height: 260px;
  object-position: 34% 50%;
  margin: -14px 0 0;
`;

export const Img4 = styled(Img1)`
  height: 230px;
  object-position: 79% 50%;
  margin: 16px 0 0;
`;
