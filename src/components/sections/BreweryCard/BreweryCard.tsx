import React, { useRef, useState } from "react";
import { Check, Trash, Graph, Location, Phone, Plus } from "../../icons";
import BreweryTag from "./BreweryTag";

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
  const cardRef = useRef<HTMLElement>(null);
  const [toggleInput, setToggleInput] = useState<boolean>(false);
  const [tagList, setTagList] = useState<Array<unknown>>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTag = () => {
    setTagList([
      ...tagList,
      <BreweryTag key={`Tag-${inputValue}`} tag={inputValue} />,
    ]);
  };

  return (
    <article ref={cardRef}>
      <button onClick={() => cardRef.current?.remove()}>
        <Trash />
      </button>
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
        <>
          <BreweryTag tag={brewery_type} icon={<Graph />} />
          <BreweryTag tag={postal_code} icon={<Location />} />
          <BreweryTag tag={phone} icon={<Phone />} />
          {tagList}
          <button type="button" onClick={() => setToggleInput(true)}>
            {toggleInput ? (
              <>
                <Check
                  onClick={() => {
                    handleAddTag();
                    setInputValue("");
                    setToggleInput(false);
                  }}
                />
                <input
                  autoFocus
                  className="tag-input"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setInputValue("");
                      setToggleInput(false);
                    }
                    if (event.key === "Enter" && inputValue !== "") {
                      handleAddTag();
                      setInputValue("");
                      setToggleInput(false);
                    }
                  }}
                />
              </>
            ) : (
              <>
                <Plus /> Add More
              </>
            )}
          </button>
        </>
      </div>
    </article>
  );
};

export default BreweryCard;
