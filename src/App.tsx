import "./App.css";
import PostWithMenu from "./components/PostWithMenu/PostWithMenu";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <PostWithMenu />
    </AppContainer>
  );
}

export default App;
