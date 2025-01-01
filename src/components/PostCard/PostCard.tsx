import { FC } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #555;
`;

const MenuIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;

interface PostCardProps {
  title: string;
  text: string;
  onMenuClick: () => void;
}

const PostCard: FC<PostCardProps> = ({ title, text, onMenuClick }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <MenuIcon onClick={onMenuClick}></MenuIcon>
    </CardContainer>
  );
};

export default PostCard;
