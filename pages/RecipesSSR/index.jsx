import Head from "next/head";
import Link from "next/link";
import GridList from "../../components/GridList.jsx";
import { DetailPage } from "../../components/DetailPage.jsx";
import styled from "styled-components";
import { getAllProducts } from "../../services/productService";

export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: { products: products },
  };
}

export default function Products({ products }) {
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
            <br /> This is a example of dynamic Routing and SSR Server Site
            Generation. Go to one of these Recipes and look at the URL. You can
            exchange the id-number with any number you want
            <br />
            <br />
          </p>
          <GridList>
            {products.map((product) => (
              <li key={product.id}>
                <Link href={`/RecipesSSR/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </GridList>
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
