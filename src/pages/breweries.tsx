import React, { useEffect, useState } from "react";
import getBreweries from "../hooks/useBreweries";
import type { HeadFC } from "gatsby";
import Header from "../components/sections/Header";

import "../styles/pages/breweries.scss";
import BreweryCard from "../components/sections/BreweryCard";

type Props = {
  location: {
    state: {
      username: string;
    };
  };
};

type breweryProps = {
  name?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  brewery_type?: string;
  postal_code?: string;
  phone?: string;
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
      <main className="breweries-main-container">
        {breweries.map(
          (brewery: breweryProps, index: number) =>
            brewery.name && (
              <BreweryCard key={`breweryCard-${index}`} {...brewery} />
            )
        )}
      </main>
    </>
  );
};

export const Head: HeadFC = () => <title>BEES Front-End Challenge</title>;

export default Brewery;
