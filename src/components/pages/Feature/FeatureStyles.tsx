import styled from "styled-components";

export const LoginFormWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: -133px 0 0;
  background: rgba(33, 33, 33, 0.3);
  backdrop-filter: blur(4px);
  z-index: 2;

  @media (min-width: 768px) {
    margin: -143px 0 0;
  }
  @media (min-width: 1024px) {
    margin: -144px 0 0;
  }
  @media (min-width: 1920px) {
    margin: -152px 0 0;
  }
`;