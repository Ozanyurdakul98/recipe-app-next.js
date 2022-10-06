import Head from "next/head";
import Link from "next/link";
import { DetailPage } from "../../components/DetailPage";
import GridList from "../../components/GridList";
import { getAllCategories } from "../../services/categoryService";
import styled from "styled-components";

export async function getStaticProps() {
  const categories = await getAllCategories();

  return {
    props: { categories: categories },
  };
}

export default function Categories({ categories }) {
  return (
    <>
      <StyledContainer>
        <DetailPage>
          <Head>
            <title>Static Site Generation</title>
          </Head>
          <h1>Categories</h1>
          <p>
            Static Site Generation <br /> <br /> These Categories are fetched in
            a getStaticProps function and are then mapped trough to create
            dynamic generated sites. <br /> <br />
          </p>
          <GridList>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/Categories/${category.id}`}>{category.name}</Link>
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
