import Head from "next/head";
import { DetailPage } from "../components/DetailPage";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Recipes App</title>
      </Head>
      <StyledContainer>
        <DetailPage>
          <h1>Some of my favourite Recipes</h1>
          <ul>
            <li>very tasty</li>
            <li>fast serving</li>
            <li>and made with next.js</li>
          </ul>
          <p>
            So this is the first website I made with next.js technology <br />
            Ofcourse it's nothing big, but the purpose is to get familiar with
            the technology with small steps.
            <br />
            Atleast this is the approach in my Neuefisch Traineeship for Web
            Development. <br />
            For sure I'm very excited what'll come next. <br />
          </p>
        </DetailPage>
      </StyledContainer>
    </>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    margin-left: 40px;
    margin-bottom: 40px;
  }
`;

const Background = styled.div`
  width: 70%;
  height: 70%;
`;
