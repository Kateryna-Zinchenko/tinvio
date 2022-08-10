import React from 'react';
import styled from 'styled-components';

type Props = {
    background?: boolean;
    textColor?: string;
    dotColor?: boolean;
    margin?: string;
    width?: string;
    borderRadius?: string;
    year?: string;
    Li1?: string;
    Li2?: string;
    Li3?: string;

};

const DoneTab = ({
                     background,
                     textColor,
                     dotColor,
                     margin,
                     width,
                     borderRadius,
                     year,
                     Li1,
                     Li2,
                     Li3,
                 } : Props ) =>
{
    return (
        <TabWrapper background={background} margin={margin} borderRadius={borderRadius}>
            <Year textColor={textColor}>{year}</Year>
            <List>
                <LiWrapper>
                    <div>
                        <DotWrapper>
                            <LightDot dotColor={dotColor}/>
                        </DotWrapper>
                    </div>
                    <Li textColor={textColor}>
                        {Li1}
                    </Li>
                </LiWrapper>
                <LiWrapper>
                    <div>
                        <DotWrapper>
                            <LightDot dotColor={dotColor}/>
                        </DotWrapper>
                    </div>
                    <Li textColor={textColor}>
                        {Li2}
                    </Li>
                </LiWrapper>
                <LiWrapper>
                    <div>
                        <DotWrapper>
                            <LightDot dotColor={dotColor}/>
                        </DotWrapper>
                    </div>
                    <Li textColor={textColor}>
                        {Li3}
                    </Li>
                </LiWrapper>
            </List>
        </TabWrapper>
    );
}
;

export default DoneTab;

export const TabWrapper = styled.div<Props>`
  margin: ${({margin}) => margin ? margin : '16px auto 0'};
  padding: 40px 16px 40px 40px;
  background: ${({background}) => background ? '#363636' : '#F7F7F7'};
  border-radius: ${({borderRadius}) => borderRadius && borderRadius};
`;

export const Year = styled.div<Props>`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: ${({textColor}) => textColor ? textColor : '#212121'};
`;

export const List = styled.div`
  padding: 16px 0 0;
  margin: 0 auto;
`;

export const LiWrapper = styled.div`
  padding: 5px 0 0 15px;
  margin: 12px 0 0;
  position: relative;

  &:first-child {
    margin: 0;
  }
`;

export const Li = styled.div<Props>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: ${({textColor}) => textColor ? textColor : '#5C5C5C'};
  z-index: 1;
  position: relative;
`;

export const DotWrapper = styled.div`
  width: 31px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LightDot = styled.div<Props>`
  width: 22px;
  height: 22px;
  background: ${({dotColor}) => dotColor 
          ? 'radial-gradient(95.51% 95.51% at 50% 50%, rgba(109, 109, 109, 0.18) 0%, rgba(250, 250, 250, 0) 100%)' 
          : 'radial-gradient(95.51% 95.51% at 50% 50%, #FFFFFF 0%, #FFFFFF 100%)'};
  border-radius: 2px;
  transform: rotate(-45deg);
`;
