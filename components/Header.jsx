import React from "react";
import styled from "styled-components";
import { TbCookie } from "react-icons/tb";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <StyledContainer>
      <div>
        <TbCookie size="4rem" />
        <h3>My Recipes</h3>
      </div>
      <StyledNav>
        <Link href="/">
          <Anchor active={pathname === "/"}>Home</Anchor>
        </Link>
        <Link href="/Dessert">
          <Anchor active={pathname === "/Dessert"}>Dessert</Anchor>
        </Link>
        <Link href="/Veggie">
          <Anchor active={pathname === "/Veggie"}>Veggie</Anchor>
        </Link>
        <Link href="/Recipes">
          <Anchor active={pathname === "/Recipes"}>Dynamic-Routing</Anchor>
        </Link>{" "}
        <Link href="/Categories">
          <Anchor active={pathname === "/Categories"}>SSG</Anchor>
        </Link>
        {/* 
        <Link>
          <a>Account</a>
        </Link> */}
      </StyledNav>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100px + 2vmin);
  background-color: var(--background-primary);
  color: var(--text-secondary);
  margin: 0;
  padding: 1.5rem;

  h3 {
    font-size: calc(40px + 2vmin);
    margin-left: 20px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
const Anchor = styled.a`
  color: var(--text-primary);
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  &:hover {
    cursor: pointer;
    color: var(--text-secondary);
  }

  @media (max-width: 900px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: block;
    position: absolute;
    color: white;
    width: 100%;
    text-align: center;
    top: 100px;
    right: 0;
    background-color: var(--background-primary);
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 8px;
    padding-right: 8px;
    z-index: 100;
  }
`;
