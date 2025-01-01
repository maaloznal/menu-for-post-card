import { FC } from "react";
import { StyleProps } from "../../types/types";

interface PostMenuProps extends StyleProps {
  onClose: () => void;
}

const PostMenu: FC<PostMenuProps> = ({
  onClose,
  menuContainer = "menu-container",

  menuItem = "menu-item",
}) => {
  return (
    <div className={menuContainer}>
      <div className={menuItem}
        onClick={() => {
          alert("Редактировать пост");
          onClose();
        }}
      >
        Редактировать пост
      </div>
      <div className={menuItem}
        onClick={() => {
          alert("Удалить пост");
          onClose();
        }}
      >
        Удалить пост
      </div>
      <div className={menuItem}
        onClick={() => {
          alert("Добавить в избранное");
          onClose();
        }}
      >
        Добавить в избранное
      </div>
    </div>
  );
};

export default PostMenu;
