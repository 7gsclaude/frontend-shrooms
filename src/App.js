import Navbar from "./components/Navbar";
import Main from "./components/Main";
import styled from "styled-components";
import { AuthProvider } from "./components/context/AuthContext";



const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
 

  background-color: #88018d;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Container>
          <Navbar />
          <Main />
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
