import { useRouter } from "next/router";
import { DetailPage } from "../../components/DetailPage";
import styled from "styled-components";
import Link from "next/link";
import { getProductById } from "../../services/productService";
import Head from "next/head";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = await getProductById(id);

  return {
    props: {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
    },
  };
}

export default function Product({ name, description, price, category, id }) {
  return (
    <>
      <StyledContainer>
        <DetailPage>
          <Head>
            <title>{`Product: ${name}`}</title>
          </Head>
          <h1>{name}</h1>
          <Price>Preis: {price} €</Price>
          <h2>Details</h2>
          <Table>
            <tbody>
              <tr>
                <TdBold>Beschreibung:</TdBold>
                <td>{description}</td>
              </tr>
              <tr>
                <TdBold>Kategorie:</TdBold>
                <td>{category}</td>
              </tr>
            </tbody>
          </Table>
          <Link href={`/RecipesSSR`} passHref>
            <Anchor>Alle Produkte</Anchor>
          </Link>
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
`;
const Anchor = styled.a`
  color: var(--text-secondary);
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;
const Price = styled.p`
  font-size: 1.5rem;
`;

const Table = styled.table`
  font-size: 0.9rem;
  text-align: left;
  text-align: left;
  max-width: 40rem;
  margin-bottom: 2rem;
`;

const TdBold = styled.td`
  vertical-align: baseline;
  font-weight: bold;
  display: block;
  margin-right: 2rem;
  padding-left: 0;
`;
