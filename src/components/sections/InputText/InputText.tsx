import React from "react";
import "./styles.scss";

const InputText = () => {
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
        />
        <div className="input-text__checkbox-wrapper">
          <input type="checkbox" name="age-check" />
          <label htmlFor="age-check">Are you older than 18 years old?</label>
        </div>
        <button type="submit">Enter</button>
      </form>
    </section>
  );
};

export default InputText;
