import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 120px 0 0;
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  text-align: center;
  color: #212121;
`;

export const Questions = styled.div`
  padding: 41px 16px 0;
`;

export const QuestionWrapper = styled.div`
  margin: 24px 0 0;
  &:first-child {
    margin: 0;
  }
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #212121;
`;

export const PlusWrapper = styled.div<{ isOpen:boolean }>`
  display: ${({isOpen}) => !isOpen ? 'block' : 'none'};
  width: 20px;
  height: 20px;
  position: relative;
`;

export const Plus = styled.div`
  &::before {
    content: '';
    width: 20px;
    height: 2px;
    background: #212121;
    border-radius: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: '';
    width: 2px;
    height: 20px;
    background: #212121;
    border-radius: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const MinusWrapper = styled.div<{ isOpen:boolean }>`
  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`;

export const Minus = styled.div`
  width: 20px;
  height: 2px;
  background: #212121;
  border-radius: 100px;
`;

export const Border = styled.div`
  width: 100%;
  height: 1px;
  background: #D2D2D2;
  margin: 24px 0 0;
`;

export const BorderLast = styled(Border)`
  display: none;
`;

export const Text = styled.div<{ isOpen:boolean }>`
  display: ${({isOpen}) => isOpen ? 'block' : 'none'};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #212121;
  padding: 16px 0 0;
`;
