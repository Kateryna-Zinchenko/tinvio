import styled from "styled-components";
import {DeviceWidth} from "../../../../../styles/global";

export const Wrapper = styled(DeviceWidth)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewY(-8deg);
  margin: 148px 0 0;
  border-radius: 50px 0 0 50px;
  width: 100%;
  height: 905px;
  background: #363636;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 958px;
  }
  @media (min-width: 1024px) {
    height: 668px;
  }
  @media (min-width: 1280px) {
    margin: 148px 0 0 54px;
  }
  @media (min-width: 1920px) {
    margin: 190px 0 0 54px;
    height: 696px;
  }
`;

export const RhombsBottom = styled.div`
  background: url("/assets/images/rhombs-bottom-why-choose.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 412px;
  height: 312px;
  bottom: -171px;
  left: -124px;
  transform: skewY(8deg);
  @media (min-width: 768px) {
    background-size: cover;
    width: 424px;
    height: 321px;
    bottom: -118px;
    left: -159px;
  }
  @media (min-width: 1024px) {
    width: 465px;
    height: 352px;
    bottom: -188px;
    left: -146px;
  }
`;

export const Stars = styled.img`
  position: absolute;
  width: 356px;
  height: 217px;
  top: -204px;
  right: 4px;
  transform: skewY(8deg);
`;

export const Inner = styled.div`
  transform: skewY(8deg);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    margin: 0 0 0 -108px;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  display: flex;
  align-items: center;
  padding: 110px 0 0;
  color: #FFFFFF;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 39px;
  }
  @media (min-width: 1024px) {
    line-height: 38px;
    padding: 82px 0 0;
  }
  @media (min-width: 1280px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (min-width: 1920px) {
    font-size: 44px;
    line-height: 54px;
  }
`;

export const Slider = styled.div`
  margin: 36px 0 0;
  @media (min-width: 768px) {
    margin: 32px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 41px 0 0 50px;
  }
  @media (min-width: 1280px) {
    margin: 40px auto 0;
  }
  @media (min-width: 1920px) {
    margin: 42px auto 0;
  }
`;

export const Slide1 = styled.div<{ slide: string }>`
  display: ${({slide}) => (slide === 'first-slide' ? 'block' : 'none')};
  width: 343px;
  height: 550px;
  background: #FFFFFF;
  border-radius: 32px;
  padding: 22px 0 0;
  //animation-duration: 0.6s;
  //animation-name: slidein;
  @media (min-width: 768px) {
    width: 490px;
    height: 610px;
    padding: 30px 0 0;
  }
  @media (min-width: 1024px) {
    position: relative;
    width: 947px;
    height: 377px;
    padding: 0px 0 0px 0;
  }
  @media (min-width: 1280px) {
    width: 1032px;
    //padding: 32px 0 0;
  }
  @media (min-width: 1920px) {
    width: 1132px;
    //padding: 32px 0 0;
  }
`;
export const Slide2 = styled(Slide1)<{ slide: string }>`
  display: ${({slide}) => (slide === 'second-slide' ? 'block' : 'none')};
  padding: 6px 0 0;
  @media (min-width: 768px) {
    padding: 0 0 0;
  }
  @media (min-width: 1024px) {
    padding: 3px 0 0;
  }
`;
export const Slide3 = styled(Slide1)<{ slide: string }>`
  display: ${({slide}) => (slide === 'third-slide' ? 'block' : 'none')};
`;
export const Slide4 = styled(Slide1)<{ slide: string }>`
  display: ${({slide}) => (slide === 'fourth-slide' ? 'block' : 'none')};
`;

export const Img1 = styled.img`
  width: 235px;
  height: 223px;
  margin: 0 0 15px 65px;
  @media (min-width: 768px) {
    width: 302px;
    height: 287px;
    margin: 0 0 17px 102px;
  }
  @media (min-width: 1024px) {
    width: 328px;
    height: 317px;
    margin: 0;
    position: absolute;
    right: 36px;
    top: 30px;
    z-index: 1;
  }
  @media (min-width: 1280px) {
    right: 17px;
  }
`;
export const Img2 = styled(Img1)`
  width: 189px;
  height: unset;
  margin: 0 0 0 104px;
  @media (min-width: 768px) {
    width: 249px;
    margin: 0 0 0 157px;
  }
  @media (min-width: 1024px) {
    width: 278px;
    right: 0;
    top: 3px;
  }
  @media (min-width: 1280px) {
    top: 8px;
    right: 2px;
  }
  @media (min-width: 1920px) {
    top: 8px;
    right: 2px;
  }
`;
export const Img3 = styled(Img1)`
  width: 243px;
  height: unset;
  margin: -21px 0 0 67px;
  @media (min-width: 768px) {
    width: 318px;
    margin: -21px 0 -13px 112px;
  }
  @media (min-width: 1024px) {
    width: 355px;
    right: 12px;
    top: 25px;
  }
  @media (min-width: 1920px) {
    width: 349px;
    right: 12px;
    top: 22px;
  }

`;
export const Img4 = styled(Img1)`
  width: 184px;
  height: unset;
  margin: 4px 0 0 92px;
  @media (min-width: 768px) {
    width: 235px;
    margin: 5.5px 0 0 140px;
  }
  @media (min-width: 1024px) {
    width: 278px;
    top: unset;
    bottom: 0;
    right: 17px;
  }
`;

export const TextBox1 = styled.div`
  width: 327px;
  background: #F1F1F1;
  padding: 24px 0 24px 24px;
  border-radius: 16px;
  @media (min-width: 768px) {
    width: 474px;
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 32px;
    left: 32px;
    width: 724px;
  }
  @media (min-width: 1280px) {
    width: 823px;
  }
  @media (min-width: 1920px) {
    width: 933px;
  }
`;
export const TextBox2 = styled(TextBox1)`
  @media (min-width: 1024px) {
    width: 792px;
  }
  @media (min-width: 1280px) {
    width: 874px;
  }
  @media (min-width: 1920px) {
    width: 976px;
  }
`;
export const TextBox3 = styled(TextBox1)`
  @media (min-width: 1024px) {
    width: 653px;
  }
  @media (min-width: 1280px) {
    width: 741px;
  }
  @media (min-width: 1920px) {
    width: 866px;
  }
`;
export const TextBox4 = styled(TextBox1)`
  @media (min-width: 1024px) {
    width: 756px;
  }
  @media (min-width: 1280px) {
    width: 840px;
  }
  @media (min-width: 1920px) {
    width: 935px;
  }
`;

export const Text1 = styled.div`
  width: 287px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #212121;
  @media (min-width: 768px) {
    width: 418px;
  }
  @media (min-width: 1024px) {
    width: 469px;
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: 1280px) {
    width: 626px;
  }
  @media (min-width: 1920px) {
    width: 701px;
    font-size: 20px;
    line-height: 25px;
  }
`;
export const Text2 = styled(Text1)`
  @media (min-width: 1024px) {
    width: 548px;
  }
  @media (min-width: 1280px) {
    width: 681px;
  }
  @media (min-width: 1920px) {
    width: 759px;
  }
`;
export const Text3 = styled(Text1)`
  @media (min-width: 1024px) {
    width: 513px;
  }
  @media (min-width: 1280px) {
    width: 565px;
  }
  @media (min-width: 1920px) {
    width: 698px;
  }
`;
export const Text4 = styled(Text1)`
  @media (min-width: 1024px) {
    width: 541px;
  }
  @media (min-width: 1280px) {
    width: 621px;
  }
  @media (min-width: 1920px) {
    width: 750px;
  }
`;

export const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  width: 295px;
  margin: 14px auto 0;
  @media (min-width: 768px) {
    margin: 20px auto 0;
    width: 426px;
  }
  @media (min-width: 1024px) {
    margin: 0;
    display: block;
    padding: 188px 0 0 56px;
  }
  @media (min-width: 1280px) {
    padding: 172px 0 0 56px;
  }
  @media (min-width: 1920px) {
    padding: 175px 0 0 56px;
  }
`;

export const Caption2 = styled(Caption)`
  margin: 24px auto 0;
  @media (min-width: 768px) {
    margin: 26px auto 0;
  }
  @media (min-width: 1024px) {
    margin: 0;
    display: block;
    padding: 194px 0 0 56px;
  }
  @media (min-width: 1280px) {
    padding: 178px 0 0 56px;
  }
  @media (min-width: 1920px) {
    padding: 181px 0 0 56px;
  }
`;

export const Caption3 = styled(Caption)`
  margin: 22px auto 0;
  @media (min-width: 768px) {
    margin: 28px auto 0;
  }
  @media (min-width: 1024px) {
    margin: 0;
    display: block;
    padding: 196px 0 0 56px;
  }
  @media (min-width: 1280px) {
    padding: 180px 0 0 56px;
  }
  @media (min-width: 1920px) {
    padding: 183px 0 0 56px;
  }
`;

export const Caption4 = styled(Caption)`
  margin: 24px auto 0;
  @media (min-width: 768px) {
    margin: 28px auto 0;
  }
  @media (min-width: 1024px) {
    margin: 0;
    display: block;
    padding: 196px 0 0 56px;
  }
  @media (min-width: 1280px) {
    padding: 180px 0 0 56px;
  }
  @media (min-width: 1920px) {
    padding: 183px 0 0 56px;
  }
`;

export const Logo1 = styled.img`
  width: 48px;
  height: 56px;
  margin: 0 12px 0 0;
  @media (min-width: 768px) {
    width: 55px;
    height: 64px;
  }
`;
export const Logo2 = styled.img`
  width: 60px;
  height: 44px;
  margin: 0 12px 0 0;
  @media (min-width: 768px) {
    width: 70px;
    height: 52px;
  }
`;
export const Logo3 = styled.img`
  width: 85px;
  height: 40px;
  margin: 0 12px 0 0;
  @media (min-width: 768px) {
    width: 102px;
    height: 48px;
  }
`;
export const Logo4 = styled.img`
  width: 78px;
  height: 40px;
  margin: 0 12px 0 0;
  @media (min-width: 768px) {
    width: 94px;
    height: 48px;
  }
  @media (min-width: 1024px) {
    width: 96px;
    height: 49px;
  }
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #212121;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }

`;
export const Position = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #5C5C5C;
  margin: 4px 0 0;
  max-width: 160px;
  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 15px;
    max-width: 190px;
  }
  @media (min-width: 1280px) {
    max-width: 343px;
  }
`;
export const Quotes1 = styled.div`
  background: url("/assets/icons/quotes.png") no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
  margin: 10px 0 0;
  @media (min-width: 1024px) {
    margin: 0;
    position: absolute;
    top: 128px;
    left: 525px;
    z-index: 1;
  }
  @media (min-width: 1280px) {
    top: 104px;
    left: 682px;
  }
  @media (min-width: 1920px) {
    top: 107px;
    left: 757px;
  }
`;
export const Quotes2 = styled(Quotes1)`
  margin: 0 0 0;
  @media (min-width: 768px) {
    margin: 4px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 0;
    position: absolute;
    left: 604px;
  }
  @media (min-width: 1280px) {
    left: 737px;
  }
  @media (min-width: 1920px) {
    left: 815px;
  }
`;
export const Quotes3 = styled(Quotes1)`
  margin: 2px 0 0;
  @media (min-width: 768px) {
    margin: 2px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 0;
    position: absolute;
    left: 569px;
  }
  @media (min-width: 1280px) {
    left: 621px;
  }
  @media (min-width: 1920px) {
    left: 754px;
  }
`;
export const Quotes4 = styled(Quotes1)`
  margin: 0 0 0;
  @media (min-width: 768px) {
    margin: 2px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 0;
    position: absolute;
    left: 597px;
  }
  @media (min-width: 1280px) {
    left: 677px;
  }
  @media (min-width: 1920px) {
    left: 806px;
  }
`;

export const Arrows = styled.div`
  display: none;
  @media (min-width: 1024px) {
    position: absolute;
    bottom: 48px;
    left: 56px;
    display: flex;
    width: 104px;
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    bottom: 56px;
    left: 56px;
  }
`;

export const ArrowBox = styled.div`
  width: 40px;
  height: 40px;
  background: #D2D2D2;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: rgba(209, 209, 209, 0.7);
    transition: 0.3s;
  }
`;

export const ArrowLeft = styled.div`
  background: url("/assets/icons/arrow-left.png") no-repeat;
  background-size: contain;
  width: 12px;
  height: 20px;
  margin: 10px 0 10px 13px;
`;
export const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);
  margin: 10px 0 10px 15px;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: space-between;
  width: 105px;
  padding: 24px 0 0;
  @media (min-width: 768px) {
    padding: 32px 0 0;
  }
`;

export const Dot1 = styled.div<{ slide: string }>`
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-radius: 2px;
  background: ${({slide}) => (slide === 'first-slide' ?
          'radial-gradient(136.24% 142.18% at 50% 50%, #FFFFFF 0%, rgba(250, 250, 250, 0.8) 100%)' :
          'radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%)')};
  cursor: pointer;
  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

export const Dot2 = styled(Dot1)`
  background: ${({slide}) => (slide === 'second-slide' ?
          'radial-gradient(136.24% 142.18% at 50% 50%, #FFFFFF 0%, rgba(250, 250, 250, 0.8) 100%)' :
          'radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%)')};`;

export const Dot3 = styled(Dot1)`
  background: ${({slide}) => (slide === 'third-slide' ?
          'radial-gradient(136.24% 142.18% at 50% 50%, #FFFFFF 0%, rgba(250, 250, 250, 0.8) 100%)' :
          'radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%)')};
`;

export const Dot4 = styled(Dot1)`
  background: ${({slide}) => (slide === 'fourth-slide' ?
          'radial-gradient(136.24% 142.18% at 50% 50%, #FFFFFF 0%, rgba(250, 250, 250, 0.8) 100%)' :
          'radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%)')};
`;
