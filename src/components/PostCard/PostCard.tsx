import { FC } from "react";
import { StyleProps } from "../../types/types";
interface PostCardProps extends StyleProps {
  title: string;
  text: string;
  onMenuClick: () => void;
}

const PostCard: FC<PostCardProps> = ({
  title,
  text,
  onMenuClick,
  cardContainer = 'card-container',
  cardTitle = "card-title",
  cardText = "card-text",
  menuIcon = "menu-icon",
}) => {
  return (
    <div className={cardContainer}>
      <div className={cardTitle}>{title}</div>
      <div className={cardText}>{text}</div>
      <div className={menuIcon} onClick={onMenuClick}>{"\u2630"}</div>
    </div>
  );
};

export default PostCard;
