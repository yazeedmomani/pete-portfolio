import { useReducer } from "react";

import styles from "./ContactMeSection.module.css";

//////////////////////////////////////////////////////////////////
const nameReducer = (state, action) => {
  // CHANGE
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
        isValid: action.value.trim().length !== 0,
      };
    }
  }

  // BLUR
  if (action.type === "BLUR") {
    return {
      ...state,
      isEmpty: action.value.trim().length === 0,
      value: action.value,
      isTouched: true,
      isValid: action.value.trim().length !== 0,
    };
  }

  return { isTouched: false, isEmpty: null, isValid: true, value: "" };
};

//////////////////////////////////////////////////////////////////
const emailReducer = (state, action) => {
  // CHANGE
  if (action.type === "CHANGE") {
    if (state.isTouched === false) {
      return { ...state, value: action.value };
    }
    if (state.isTouched === true) {
      console.log(action.value.trim().length === 0);
      return {
        ...state,
        isEmpty: action.value.trim().length === 0,
        isEmail: action.value.includes("@") && action.value.includes("."),
        value: action.value,
        isValid:
          action.value.trim().length !== 0 &&
          action.value.includes("@") &&
          action.value.includes("."),
      };
    }
  }

  // BLUR
  if (action.type === "BLUR") {
    return {
      ...state,
      isEmpty: action.value.trim().length === 0,
      isEmail: action.value.includes("@") && action.value.includes("."),
      value: action.value,
      isTouched: true,
      isValid:
        action.value.trim().length !== 0 &&
        action.value.includes("@") &&
        action.value.includes("."),
    };
  }

  return {
    isTouched: false,
    isEmpty: null,
    isEmail: null,
    isValid: true,
    value: "",
  };
};

//////////////////////////////////////////////////////////////////
const LandingSection = (props) => {
  // Reducers
  const [name, dispatchName] = useReducer(nameReducer, {
    isTouched: false,
    isEmpty: null,
    isValid: true,
    value: "",
  });

  const [email, dispatchEmail] = useReducer(emailReducer, {
    isTouched: false,
    isEmpty: null,
    isEmail: null,
    isValid: true,
    value: "",
  });

  // Handlers
  const handleNameChange = (e) => {
    dispatchName({ type: "CHANGE", value: e.target.value });
  };

  const handleNameBlur = (e) => {
    dispatchName({ type: "BLUR", value: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatchEmail({ type: "CHANGE", value: e.target.value });
  };

  const handleEmailBlur = (e) => {
    dispatchEmail({ type: "BLUR", value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.section} id="contactme-section">
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
          onBlur={handleNameBlur}
          className={`${styles.input} ${!name.isValid && styles.invalid}`}
        />
        <div className={styles.error}>Required</div>
        <label
          htmlFor="email"
          className={styles.label}>
          Email Address
        </label>
        <input
          type="text"
          id="email"
          value={email.value}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          className={`${styles.input} ${!email.isValid && styles.invalid}`}
        />
        <div className={styles.error}>
          {email.isEmpty
            ? "Required"
            : !email.isEmail && "Invalid email address"}
        </div>
        <label
          htmlFor="type"
          className={styles.label}>
          Type of enquiry
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
          htmlFor="comment"
          className={styles.label}>
          Your message
        </label>
        <textarea
          name="comment"
          id="comment"
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
