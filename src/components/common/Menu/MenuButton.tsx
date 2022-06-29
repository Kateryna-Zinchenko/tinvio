import styled from "styled-components";

interface Props {
    setIsOpenMenu: (value: boolean) => void,
    isOpenMenu: boolean
}

const MenuButton = ({setIsOpenMenu, isOpenMenu}: Props) => {
    return (
        <MenuWrapper
            isOpenMenu={isOpenMenu}
            onClick={() => setIsOpenMenu(true)}
        >
            <MenuRow/>
            <MenuRow/>
            <MenuRow/>
        </MenuWrapper>
    );
};

const MenuWrapper = styled.div<{isOpenMenu : boolean}>`
  display: ${({ isOpenMenu }) => !isOpenMenu ? 'block' : 'none'};
  width: 24px;
  height: 18px;
  cursor: pointer;
`;
const MenuRow = styled.div`
  width: 24px;
  height: 3px;
  background: #5C5C5C;
  border-radius: 100px;
  margin-bottom: 5px;
  &:last-child{
    margin-bottom: 0;
  }
`;

export default MenuButton;