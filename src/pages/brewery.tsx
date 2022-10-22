import React from "react";
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
  return <p>{username}</p>;
};

export const Head: HeadFC = () => <title>BEES Front-End Challenge</title>;

export default Brewery;
