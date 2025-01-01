import { useState } from "react";
import PostCard from "../PostCard/PostCard";
import PostMenu from "../PostMenu/PostMenu";
import styled from "styled-components";

const PostWithMenuContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PostWithMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <PostWithMenuContainer>
      <PostCard
        title="Заголовок поста"
        text="Текст поста..."
        onMenuClick={handleMenuClick}
      />
      {menuVisible && <PostMenu onClose={closeMenu} />}
    </PostWithMenuContainer>
  );
};

export default PostWithMenu;
