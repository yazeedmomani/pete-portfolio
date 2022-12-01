import { useReducer } from "react";

import styles from "./ContactMeSection.module.css";

const nameReducer = (state, action) => {
  if (action.type === "CHANGE") {
    if (state.isTouched === false) {
      return { ...state, value: action.value };
    }
    if (state.isTouched === true) {
      console.log(action.value.trim().length === 0);
      return {
        ...state,
        isEmpty: action.value.trim().length === 0,
        value: action.value,
      };
    }
  }

  return { isTouched: false, isValid: null, value: "" };
};

const LandingSection = (props) => {
  // Reducers
  const [name, dispatchName] = useReducer(nameReducer, {
    isTouched: false,
    isEmpty: null,
    value: "",
  });

  // Handlers
  const handleNameChange = (e) => {
    dispatchName({ type: "CHANGE", value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.section}>
      <h1 className={styles.header}>Contact Me</h1>
      <form className={styles.form}>
        <label
          htmlFor="name"
          className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name.value}
          onChange={handleNameChange}
          className={`${styles.input} ${styles.invalid}`}
        />
        <div className={styles.error}>Error</div>
        <label
          htmlFor="email"
          className={styles.label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          className={styles.input}
        />
        <label
          htmlFor="type"
          className={styles.label}>
          Name
        </label>
        <select
          type="text"
          id="type"
          className={`${styles.input} ${styles.select}`}>
          <option value="hireMe">Freelance project proposal</option>
          <option value="openSource">Open source consultancy session</option>
          <option value="other">Other</option>
        </select>
        <label
          htmlFor="message"
          className={styles.label}>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className={`${styles.input} ${styles.textarea}`}></textarea>
        <button
          className={styles.button}
          type="submit"
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LandingSection;
