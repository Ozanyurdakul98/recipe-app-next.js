import { DetailPage } from "../components/DetailPage";
import styled from "styled-components";
export default function Error404() {
  return (
    <>
      <StyledContainer s>
        <DetailPage>
          <h1>
            Site was not found!!! <br />
            I`&apos;`m verry sorry for this!
          </h1>
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
