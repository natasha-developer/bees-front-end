import React from "react";
import type { HeadFC } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <h1>BEES Front-End Challenge</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>BEES Front-End Challenge</title>;
