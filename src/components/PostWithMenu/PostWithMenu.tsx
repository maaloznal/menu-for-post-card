import { useState } from "react";
import PostCard from "../PostCard/PostCard";
import PostMenu from "../PostMenu/PostMenu";

const PostWithMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };
  return (
    <div className="post-with-menu">
      <PostCard
        title="Заголовок поста"
        text="Текст поста..."
        onMenuClick={handleMenuClick}
      />
      {menuVisible && <PostMenu onClose={closeMenu} />}
    </div>
  );
};

export default PostWithMenu;
