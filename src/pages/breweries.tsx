import React, { useEffect, useState } from "react";
import getBreweries from "../hooks/useBreweries";
import type { HeadFC } from "gatsby";
import Header from "../components/sections/Header";

import "../styles/pages/breweries.scss";

type Props = {
  location: {
    state: {
      username: string;
    };
  };
};

const Brewery = ({
  location: {
    state: { username },
  },
}: Props) => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    getBreweries(setBreweries);
  }, []);

  return (
    <>
      <Header username={username} />
      <main className="breweries-main-container"></main>
    </>
  );
};

export const Head: HeadFC = () => <title>BEES Front-End Challenge</title>;

export default Brewery;
