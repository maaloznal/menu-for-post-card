import { FC, useState } from "react";
import PostCard from "../PostCard/PostCard";
import PostMenu from "../PostMenu/PostMenu";
import { StyleProps } from "../../types/types";
import useScreenSize from "../../hooks/useScreenSize";

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
  const screenSize = useScreenSize();

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className={`${postWithMenu} ${screenSize}`}>
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
