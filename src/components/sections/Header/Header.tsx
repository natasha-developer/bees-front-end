import { Link } from "gatsby";
import React from "react";
import { Arrow } from "../../icons";

import "./styles.scss";

type Props = {
  username: string;
};

const Header = ({ username }: Props) => {
  return (
    <header className="header">
      <Link to="/" className="header__previous-page">
        <Arrow />
        Go back
      </Link>
      <p className="header__username">{username}</p>
    </header>
  );
};

export default Header;
