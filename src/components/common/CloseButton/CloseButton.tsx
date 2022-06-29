import styled from 'styled-components';

interface Props {
    setIsOpenMenu: (value: boolean) => void,
    isOpenMenu: boolean
}

const CloseButton = ({setIsOpenMenu, isOpenMenu}: Props) => {
    return (
        <Wrapper
            isOpenMenu={isOpenMenu}
            onClick={() => setIsOpenMenu(false)}
        />
    );
};

export const Wrapper = styled.div<{ isOpenMenu: boolean }>`
  display: ${({ isOpenMenu }) => isOpenMenu ? 'block' : 'none'};
  position: relative;
  height: 20px;
  width: 20px;
  transform: rotate(45deg);
  cursor: pointer;

  &:before {
    position: absolute;
    width: 3px;
    height: 28px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #5C5C5C;
    margin: 0;
    border-radius: 100px;
  }

  &:after {
    position: absolute;
    width: 28px;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #5C5C5C;
    margin: 0;
    border-radius: 100px;
  }

`;
export default CloseButton;
