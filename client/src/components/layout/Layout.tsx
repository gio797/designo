import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styled from "styled-components";

function Layout() {
  return (
    <Main>
      <Header />
      <Outlet />
      <Footer />
    </Main>
  );
}

export default Layout;

const Main = styled.main`
  min-height: 100vh;
`;
