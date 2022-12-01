import "./App.css";
import styled from "styled-components";
import LoginForm from "./components/Login/LoginForm";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <LoginForm />
    </AppContainer>
  );
}

export default App;
