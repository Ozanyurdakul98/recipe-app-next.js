import { useRouter } from "next/router";
import { DetailPage } from "../../components/DetailPage";
import styled from "styled-components";
import Link from "next/link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { pathname } = useRouter();

  return (
    <>
      <StyledContainer>
        <DetailPage>
          <h1>Recipe {id}</h1>
          <Link href="/Recipes">
            <Anchor
              style={{
                color: "white",
                fontSize: "22px",
                border: "1px solid white",
                padding: "5px",
              }}
              active={pathname === "/Recipes"}
            >
              Go back
            </Anchor>
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
