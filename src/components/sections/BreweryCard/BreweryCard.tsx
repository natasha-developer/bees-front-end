import { Link } from "gatsby";
import React from "react";
import { Trash, Graph, Location, Phone, Plus } from "../../icons";

import "./styles.scss";

type Props = {
  name?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  brewery_type?: string;
  postal_code?: string;
  phone?: string;
};

const BreweryCard = ({
  name,
  street,
  city,
  state,
  country,
  brewery_type,
  postal_code,
  phone,
}: Props) => {
  return (
    <article>
      <Trash />
      <h1>{name}</h1>
      <p>
        {street}
        <span>
          {city}
          {state && `, ${state}`}
          {country && ` - ${country}`}
        </span>
      </p>
      <div>
        {brewery_type && (
          <span>
            <Graph />
            {brewery_type}
          </span>
        )}
        {postal_code && (
          <span>
            <Location />
            {postal_code}
          </span>
        )}
        {phone && (
          <span>
            <Phone />
            {phone}
          </span>
        )}
        <button
          type="button"
          onClick={() => {
            return;
          }}
        >
          <Plus />
          Add More
        </button>
      </div>
    </article>
  );
};

export default BreweryCard;
