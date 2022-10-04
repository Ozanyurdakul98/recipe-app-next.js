import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <StyledContainer>
      <h3>Footer</h3>
    </StyledContainer>
  );
}

const StyledContainer = styled.footer`
  display: flex;
  align-items: center;
  height: calc(100px + 2vmin);
  background-color: var(--background-primary);
  color: var(--text-secondary);
  margin: 0;

  h3 {
    font-size: calc(40px + 2vmin);
    margin-left: 20px;
  }
`;
