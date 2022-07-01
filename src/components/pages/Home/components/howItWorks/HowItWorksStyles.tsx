import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -387px 0 0 0;
  height: 767px;
  background: #F7F7F7;  
  transform: skewY(-8deg);
  border-radius: 50px 0 0 50px;
  width: 100%;
`;

export const Inner = styled.div`
  transform: skewY(8deg);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.div`
  width: 299px;
  font-family: 'Gilroy',serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  color: #212121;
  padding: 115px 0 0 0;
  text-align: center;
`;

export const Text = styled.div`
  width: 343px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: #5C5C5C;
  padding: 16px 0 0 0;
`;

export const Button = styled.button`
  position: relative;
  width: 188px;
  height: 48px;
  margin: 32px 0 0 0;
  padding: 0 0 0 18px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #212121;
  border: none;
  border-radius: 16px;
  background-color: #fff;
  cursor: pointer;
  &::before {
    content: '';
    background: url('/assets/icons/button-play.svg') no-repeat;
    background-size: contain;
    position: absolute;
    width: 10px;
    height: 12px;
    left: 51px;
  }
`;

export const Tabs = styled.div`
  position: relative;
  padding: 49px 0 0 0;
  width: 100%;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 167px;
  height: 67px;
  background-color: #fff;
  border-radius: 12px;
  padding: 15px 0 0 0;
  transform: matrix(0.99, 0.14, -0.14, 0.99, 0, 0);
  box-shadow: 4px 4px 13px 0px rgba(33,33,33,0.1);
  -webkit-box-shadow: 4px 4px 13px 0px rgba(33,33,33,0.1);
  -moz-box-shadow: 4px 4px 13px 0px rgba(33,33,33,0.1);
`;

export const Tab1 = styled(Tab)`
  margin: 21px 0 0 33px;
  &::before {

  }
  &::after {

  }
`;

export const Tab2 = styled(Tab)`
  margin: 42px 0 0 188px;
  &::before {
    
  }
  &::after {
    
  }
`;

export const Tab3 = styled(Tab)`
  margin: 21px 0 21px 18px;
`;


export const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 700;
  color: rgb(33, 33, 33);
  font-size: 14px;
  line-height: 14px;
`;

export const TabText = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: rgb(92, 92, 92);
  font-size: 9px;
  line-height: 11px;
  text-align: center;
  padding: 5px 0 0 0;
`;

export const TabText2 = styled(TabText)`
  width: 125px;
`;

export const TabText3 = styled(TabText)`
  width: 120px;
`;

export const ArrowChats = styled.img`
  position: absolute;
  width: 82px;
  height: 55px;
  left: 199px;
  top: 110px;
`;

export const ArrowOrders = styled(ArrowChats)`
  left: 106px;
  top: 196px;
`;

export const Icon1 = styled.img`
  position: absolute;
  width: 71px;
  height: 71px;
`;
export const Icon2 = styled(Icon1)`
  
`;
export const Icon3 = styled(Icon1)`
  
`;



