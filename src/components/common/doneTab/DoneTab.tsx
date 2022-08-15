import React from 'react';
import styled from 'styled-components';

type Props = {
    background?: boolean;
    textColor?: string;
    dotColor?: boolean;
    margin?: string;
    margin768?: string;
    margin1024?: string;
    width?: string;
    width768?: string;
    width1024?: string;
    width1280?: string;
    width1440?: string;
    width1920?: string;
    borderRadius?: string;
    year?: string;
    yearFontSize768?: boolean;
    yearFontSize1920?: boolean;
    yearLineHeight768?: boolean;
    yearLineHeight1920?: boolean;
    Li1?: string;
    Li2?: string;
    Li3?: string;
    liFontSize768?: boolean;
    liFontSize1920?: boolean;
    liLineHeight768?: boolean;
    liLineHeight1920?: boolean;
    listPadding768?: boolean;
    liWrapMargin768?: boolean
};

const DoneTab = ({
                     background,
                     textColor,
                     yearFontSize768,
                     yearFontSize1920,
                     yearLineHeight768,
                     yearLineHeight1920,
                     dotColor,
                     margin,
                     margin768,
                     margin1024,
                     width,
                     width768,
                     width1024,
                     width1280,
                     width1440,
                     width1920,
                     borderRadius,
                     year,
                     Li1,
                     Li2,
                     Li3,
                     liFontSize768,
                     liFontSize1920,
                     liLineHeight768,
                     liLineHeight1920,
                     listPadding768,
                     liWrapMargin768
                 } : Props ) =>
{
    return (
        <TabWrapper background={background}
                    borderRadius={borderRadius}
                    width={width}
                    width768={width768}
                    width1024={width1024}
                    width1280={width1280}
                    width1440={width1440}
                    width1920={width1920}
                    margin={margin}
                    margin768={margin768}
                    margin1024={margin1024}
        >
            <Year textColor={textColor}
                  yearFontSize768={yearFontSize768}
                  yearFontSize1920={yearFontSize1920}
                  yearLineHeight768={yearLineHeight768}
                  yearLineHeight1920={yearLineHeight1920}
            >
                {year}
            </Year>
            <List listPadding768={listPadding768}>
                <LiWrapper liWrapMargin768={liWrapMargin768}>
                    <div>
                        <DotWrapper>
                            <LightDot dotColor={dotColor}/>
                        </DotWrapper>
                    </div>
                    <Li textColor={textColor}
                        liFontSize768={liFontSize768}
                        liFontSize1920={liFontSize1920}
                        liLineHeight768={liLineHeight768}
                        liLineHeight1920={liLineHeight1920}
                    >
                        {Li1}
                    </Li>
                </LiWrapper>
                <LiWrapper liWrapMargin768={liWrapMargin768}>
                    <div>
                        <DotWrapper>
                            <LightDot dotColor={dotColor}/>
                        </DotWrapper>
                    </div>
                    <Li textColor={textColor}
                        liFontSize768={liFontSize768}
                        liFontSize1920={liFontSize1920}
                        liLineHeight768={liLineHeight768}
                        liLineHeight1920={liLineHeight1920}
                    >
                        {Li2}
                    </Li>
                </LiWrapper>
                <LiWrapper liWrapMargin768={liWrapMargin768}>
                    <div>
                        <DotWrapper>
                            <LightDot dotColor={dotColor}/>
                        </DotWrapper>
                    </div>
                    <Li textColor={textColor}
                        liFontSize768={liFontSize768}
                        liFontSize1920={liFontSize1920}
                        liLineHeight768={liLineHeight768}
                        liLineHeight1920={liLineHeight1920}
                    >
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
  width: ${({width}) => width ? width : '100%'};
  width: ${({width}) => width ? width : '100%'};
  padding: 40px 16px 40px 40px;
  background: ${({background}) => background ? '#363636' : '#F7F7F7'};
  border-radius: ${({borderRadius}) => borderRadius && borderRadius};
  
  @media (min-width: 768px) {
    width: ${({width768}) => width768 && width768};
    margin: ${({margin768}) => margin768 && margin768};
    padding: 40px;
  }
  @media (min-width: 1024px) {
    margin: ${({margin1024}) => margin1024 && margin1024};
    width: ${({width1024}) => width1024 && width1024};
  }
  @media (min-width: 1280px) {
    width: ${({width1280}) => width1280 && width1280};
  }
  @media (min-width: 1440px) {
    width: ${({width1440}) => width1440 && width1440};
  }
  @media (min-width: 1920px) {
    width: ${({width1920}) => width1920 && width1920};
  }
`;

export const Year = styled.div<Props>`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: ${({textColor}) => textColor ? textColor : '#212121'};

  @media (min-width: 768px) {
    font-size: ${({yearFontSize768}) => yearFontSize768 ? '32px' : '24px'};
    line-height: ${({yearLineHeight768}) => yearLineHeight768 ? '38px' : '29px'};
  }
  @media (min-width: 1920px) {
    font-size: ${({yearFontSize1920}) => yearFontSize1920 ? '36px' : '24px'};
    line-height: ${({yearLineHeight1920}) => yearLineHeight1920 ? '42px' : '29px'};
  }
`;

export const List = styled.div<Props>`
  padding: 16px 0 0;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: ${({listPadding768}) => listPadding768 ? '25px 0 0' : '16px 0 0'};
  }
`;

export const LiWrapper = styled.div<Props>`
  padding: 5px 0 0 15px;
  margin: 12px 0 0;
  position: relative;

  &:first-child {
    margin: 0;
  }

  @media (min-width: 768px) {
    margin: ${({liWrapMargin768}) => liWrapMargin768 ? '16px 0 0' : '12px 0 0'};
  }
  @media (min-width: 1280px) {
    margin: 25px 0 0;
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

  @media (min-width: 768px) {
    font-size: ${({liFontSize768}) => liFontSize768 ? '16px' : '14px'};
    line-height: ${({liLineHeight768}) => liLineHeight768 ? '23px' : '150%'};
  }
  @media (min-width: 1920px) {
    font-size: ${({liFontSize1920}) => liFontSize1920 ? '18px' : '16px'};
    line-height: ${({liLineHeight1920}) => liLineHeight1920 ? '24px' : '150%'};
  }
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
