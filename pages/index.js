import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Recipes App</title>
      </Head>
      <h1>dummy content</h1>
      <p>just some dummy</p>
      <Test> TEST</Test>
    </div>
  );
}

const Test = styled.h1`
  color: blue;
`;
