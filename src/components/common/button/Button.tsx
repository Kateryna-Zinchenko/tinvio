import React from 'react';
import styled from 'styled-components';

type Props = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    children: React.ReactNode; // make the component able to receive children elements
    background?: string;
    bordered?: boolean;
    color1?: boolean;
    margin?: string;
    margin1920?: string
};
const Button = ({
                    onClick,
                    children,
                    background,
                    bordered,
                    color1,
                    margin,
                    margin1920
                }: Props) => {
    return (
        <Wrapper background={background} bordered={bordered} color1={color1} margin={margin} margin1920={margin1920}>
            {children}
        </Wrapper>
    );
};

export default Button;

const Wrapper = styled.button<Props>`
  border-radius: 16px;
  width: 188px;
  height: 48px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  background: ${({background}) => background ? background : 'none'};
  color: ${({color1}) => color1 ? '#FFFFFF' : '#212121'};
  border: ${({bordered}) => bordered ? '1px solid #D2D2D2' : 'none'};
  margin: ${({margin}) => margin ? margin : '0 auto'};
  display: block;
  cursor: pointer;
  
  &:hover {
    background: ${({background}) => background === '#FFF' || background === '#FFFFFF' ? '#E0E0E1' : '#FFF'} ;
  }

  @media(min-width: 1920px) {
    width: 210px;
    height: 56px;
    font-size: 20px;
    line-height: 25px;
    border-radius: 19px;
    margin: ${({margin1920}) => margin1920 && margin1920};
  }
`;
