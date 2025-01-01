import { FC } from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  background-color: white;
  border-radius: 5px;
  width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;

  @media (max-width: 768px) {
    width: 120px;
    top: 30px;
  }
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #333;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
  }
`;

interface PostMenuProps {
  onClose: () => void;
}

const PostMenu: FC<PostMenuProps> = ({ onClose }) => {
  return (
    <MenuContainer>
      <MenuItem
        onClick={() => {
          alert("Редактировать пост");
          onClose();
        }}
      >
        Редактировать пост
      </MenuItem>
      <MenuItem
        onClick={() => {
          alert("Удалить пост");
          onClose();
        }}
      >
        Удалить пост
      </MenuItem>
      <MenuItem
        onClick={() => {
          alert("Добавить в избранное");
          onClose();
        }}
      >
        Добавить в избранное
      </MenuItem>
    </MenuContainer>
  );
};

export default PostMenu;
