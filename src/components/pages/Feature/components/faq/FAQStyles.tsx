import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 120px 0 0;

  @media(min-width: 768px) {
    margin: 80px 0 0;
  }
  @media(min-width: 1024px) {
    margin: 140px 0 0;
  }
  @media(min-width: 1920px) {
    margin: 137px 0 0;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  text-align: center;
  color: #212121;

  @media(min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media(min-width: 1280px) {
    font-size: 40px;
    line-height: 49px;
  }
  @media(min-width: 1920px) {
    font-size: 44px;
    line-height: 54px;
  }
`;

export const Questions = styled.div`
  padding: 41px 16px 0;

  @media(min-width: 768px) {
    padding: 43px 16px 0;
  }
  @media(min-width: 1024px) {
    padding: 43px 40px 0;
  }
  @media(min-width: 1280px) {
    padding: 40px 124px 0;
  }
  @media(min-width: 1920px) {
    padding: 40px 304px 0;
  }
`;

export const QuestionWrapper = styled.div`
  margin: 24px 0 0;
  &:first-child {
    margin: 0;
  }

  @media(min-width: 768px) {
    margin: 32px 0 0;
  }
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #212121;

  @media(min-width: 768px) {
    font-size: 20px;
    line-height: 25px;
  }
  @media(min-width: 1920px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const PlusWrapper1 = styled.div<{ question:string }>`
  display: ${({question}) => question.includes('started') ? 'none' : 'block'};
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
`;

export const PlusWrapper2 = styled(PlusWrapper1)<{ question:string }>`
  display: ${({question}) => question.includes('work') ? 'none' : 'block'};
`;

export const PlusWrapper3 = styled(PlusWrapper1)<{ question:string }>`
  display: ${({question}) => question.includes('collect') ? 'none' : 'block'};
`;

export const PlusWrapper4 = styled(PlusWrapper1)<{ question:string }>`
  display: ${({question}) => question.includes('supported') ? 'none' : 'block'};
`;

export const PlusWrapper5 = styled(PlusWrapper1)<{ question:string }>`
  display: ${({question}) => question.includes('contact') ? 'none' : 'block'};
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

export const MinusWrapper1 = styled.div<{ question:string }>`
  display: ${({question}) => question.includes('started') ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MinusWrapper2 = styled(MinusWrapper1)<{ question:string }>`
  display: ${({question}) => question.includes('work') ? 'flex' : 'none'};
`;

export const MinusWrapper3 = styled(MinusWrapper1)<{ question:string }>`
  display: ${({question}) => question.includes('collect') ? 'flex' : 'none'};
`;

export const MinusWrapper4 = styled(MinusWrapper1)<{ question:string }>`
  display: ${({question}) => question.includes('supported') ? 'flex' : 'none'};
`;

export const MinusWrapper5 = styled(MinusWrapper1)<{ question:string }>`
  display: ${({question}) => question.includes('contact') ? 'flex' : 'none'};
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

  @media(min-width: 768px) {
    margin: 32px 0 0;
  }
`;

export const Text1 = styled.div<{ question:string }>`
  display: ${({question}) => question.includes('started') ? 'block' : 'none'};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #212121;
  padding: 16px 0 0;

  @media(min-width: 768px) {
    padding: 24px 0 0;
  }
  @media(min-width: 1920px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Text2 = styled(Text1)<{ question:string }>`
  display: ${({question}) => question.includes('work') ? 'block' : 'none'};
`;

export const Text3 = styled(Text1)<{ question:string }>`
  display: ${({question}) => question.includes('collect') ? 'block' : 'none'};
`;

export const Text4 = styled(Text1)<{ question:string }>`
  display: ${({question}) => question.includes('supported') ? 'block' : 'none'};
`;

export const Text5 = styled(Text1)<{ question:string }>`
  display: ${({question}) => question.includes('contact') ? 'block' : 'none'};
`;
