import { FC, useState } from "react";
import PostCard from "../PostCard/PostCard";
import PostMenu from "../PostMenu/PostMenu";
import { StyleProps } from "../../types/types";

const PostWithMenu: FC<StyleProps> = ({
  postWithMenu = "post-with-menu",
  cardContainer = "card-container",
  cardTitle = "card-title",
  cardText = "card-text",
  menuIcon = "menu-icon",
  menuContainer = "menu-container",
  menuItem = "menu-item",
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className={postWithMenu}>
      <PostCard
        title="Заголовок поста"
        text="Текст поста..."
        onMenuClick={handleMenuClick}
        cardContainer={cardContainer}
        cardTitle={cardTitle}
        cardText={cardText}
        menuIcon={menuIcon}
      />
      {menuVisible && (
        <PostMenu
          onClose={closeMenu}
          menuContainer={menuContainer}
          menuItem={menuItem}
        />
      )}
    </div>
  );
};

export default PostWithMenu;
