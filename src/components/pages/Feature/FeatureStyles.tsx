import styled from "styled-components";

export const LoginFormWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(33, 33, 33, 0.3);
  backdrop-filter: blur(4px);
  z-index: 3;
`;
