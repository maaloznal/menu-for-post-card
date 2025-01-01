import "./App.css";
import PostWithMenu from "./components/PostWithMenu/PostWithMenu";
import { StyleProps } from "./types/types";

function App({ appContainer = "app-container" }: StyleProps) {
  return (
    <div className={appContainer}>
      <PostWithMenu
        postWithMenu="post-with-menu"
        cardContainer="card-container"
        cardTitle="card-title"
        cardText="card-text"
        menuIcon="menu-icon"
        menuContainer="menu-container"
        menuItem="menu-item"
      />
    </div>
  );
}

export default App;
