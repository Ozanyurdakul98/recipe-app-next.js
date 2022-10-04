import React from "react";
import { DetailPage } from "../components/DetailPage.jsx";
import Image from "next/image";
import styled from "styled-components";

export default function Dessert() {
  return (
    <StyledContainer>
      <Background>
        <Image
          src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
          alt="Schöne Fische"
          layout="responsive"
          width={2400}
          height={1800}
        />
      </Background>
      <DetailPage style={{ marginTop: "40px" }}>
        <h1>Desert Recipe</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          maxime laudantium porro officiis sequi? Possimus, animi illo aut
          dolorem sit blanditiis, repellat sequi exercitationem, soluta labore
          vitae nobis corporis facilis.
        </p>
      </DetailPage>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  width: 70%;
  height: 70%;
`;
