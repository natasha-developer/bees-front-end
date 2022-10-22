import type { ChangeEvent } from "react";
import React, { useState } from "react";
import { Link } from "gatsby";

import { blockInvalidChar } from "../../utils/blockInvalidChar";

import "./styles.scss";

const InputText = () => {
  const [username, setUsername] = useState<string>("");
  const [isNameFilled, setIsNameFilled] = useState<boolean>(false);
  const [isAgeChecked, setIsAgeChecked] = useState<boolean>(false);

  return (
    <section className="input-text">
      <form className="input-text__form">
        <label className="input-text__label">
          Please, enter your full name below
          <span>Only alphabetical characters are accepted</span>
        </label>
        <input
          type="text"
          placeholder="Full name"
          className="input-text__name-input"
          onKeyDown={blockInvalidChar}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            event.target.value !== ""
              ? setIsNameFilled(true)
              : setIsNameFilled(false);
            setUsername(event.target.value);
          }}
        />
        <div className="input-text__checkbox-wrapper">
          <input
            type="checkbox"
            name="age-check"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setIsAgeChecked(event.target.checked)
            }
          />
          <label htmlFor="age-check">Are you older than 18 years old?</label>
        </div>
        <Link
          to="/brewery"
          type="button"
          role="button"
          state={{ username }}
          className={isNameFilled && isAgeChecked ? "" : "disabled"}
        >
          Enter
        </Link>
      </form>
    </section>
  );
};

export default InputText;
