import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  margin: 0;
  margin-top: 100px;
  min-height: calc(100vh - 8rem);
`;
