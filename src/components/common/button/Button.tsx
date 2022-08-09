import React from 'react';
import styled from 'styled-components';

type Props = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    children: React.ReactNode; // make the component able to receive children elements
    background?: string;
    bordered?: boolean;
    color1?: boolean
};
const Button = ({
                    onClick,
                    children,
                    background,
                    bordered,
                    color1
                }: Props) => {
    return (
        <Wrapper background={background} bordered={bordered} color1={color1}>
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
  background: ${({background}) => background ? background : 'none'} ;
  color: ${({color1}) => color1 ? '#FFFFFF' : '#212121'};
  border: ${({bordered}) => bordered ? '1px solid #D2D2D2' : 'none'};
  margin: 0 auto;
  display: block;
`;
