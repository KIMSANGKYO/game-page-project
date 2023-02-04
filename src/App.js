import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Lotto from "./pages/Lotto";
import Main from "./pages/Main";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [isNav, setIsNav] = useState(false);

  const navHandler = () => {
    setIsNav(!isNav);
  };

  return (
    <BrowserRouter>
      <Body>
        <Header navHandler={navHandler} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/lotto" element={<Lotto />} />
        </Routes>
        {isNav === true ? <Nav navHandler={navHandler} /> : null}
        <Footer />
      </Body>
    </BrowserRouter>
  );
}

export default App;
