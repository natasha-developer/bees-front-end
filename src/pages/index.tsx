import React from "react";
import type { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import InputText from "../components/sections/InputText";

import "../styles/pages/index.scss";

const IndexPage = () => {
  return (
    <main className="index-main-container">
      <InputText />
      <StaticImage
        src="../images/bee-logo.png"
        alt="BEES Logo"
        loading="eager"
        placeholder="tracedSVG"
        layout="fixed"
        width={278}
        height={278}
      />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>BEES Front-End Challenge</title>;
