import React, { useEffect, useState } from "react";
import getBreweries from "../hooks/useBreweries";
import type { HeadFC } from "gatsby";

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

  return <p>{username}</p>;
};

export const Head: HeadFC = () => <title>BEES Front-End Challenge</title>;

export default Brewery;
