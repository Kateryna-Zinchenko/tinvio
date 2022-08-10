import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 180px 0 0;
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: #212121;
  position: relative;
  padding: 0 0 34px;
`;

export const Stars = styled.div`
  background: url("/assets/icons/company/role-stars.png") no-repeat;
  background-size: contain;
  width: 66px;
  height: 62px;
  position: absolute;
  top: -40px;
  left: 0;
`;

export const ImagesWrapper = styled.div`
  margin: 48px auto 0;
`;

export const Img1 = styled.img`
  width: 343px;
  height: 260px;
  object-fit: cover;
  border-radius: 32px;
  object-position: 44% 0;
  margin: 16px auto 0;
  
`;

export const Img2 = styled(Img1)`
    
`;

export const Img3 = styled(Img1)`
  object-position: 16% 0;
`;

export const Img4 = styled(Img1)`
  object-position: 87% 0;
`;
