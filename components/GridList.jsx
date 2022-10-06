import styled from "styled-components";

const GridList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  flex-wrap: wrap;
  & a {
    display: block;
    border: 1px solid var(--text-secondary);
    background-color: var(--background-light);
    color: var(--text-secondary);
    border-radius: 0.5rem;
    padding: 1rem;
    text-decoration: none;
    height: 100%;
  }

  & a:hover {
    background-color: var(--white);
  }

  @media (max-width: 600px) {
  }
`;

export default GridList;
