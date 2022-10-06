import Head from "next/head";
import Link from "next/link";
import GridList from "../../components/GridList.jsx";
import { DetailPage } from "../../components/DetailPage.jsx";
import styled from "styled-components";

export default function Products() {
  return (
    <>
      <StyledContainer>
        <DetailPage>
          <Head>
            <title>My Recipes</title>
          </Head>
          <h1>Recipes</h1>
          <p>
            Basic Dynamic Routing <br />
            <br /> This is a example for dynamic Routing/Site generation. Go to
            one of these Recipes and look at the URL. You can exchange it with
            any number you want
            <br />
            <br />
          </p>
          <GridList>
            <li>
              <Link href="/Recipes/1">Recipe-1</Link>
            </li>
            <li>
              <Link href="/Recipes/2">Recipe-2</Link>
            </li>
          </GridList>{" "}
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

  p {
    margin-top: 80px;
  }
`;
