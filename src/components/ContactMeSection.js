import { useContext } from "react";
import { useReducer, useState } from "react";
import AlertContext from "../context/alertContext";
import styles from "./ContactMeSection.module.css";
import LoadingSpinner from "./LoadingSpinner";

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

  // SUBMIT_ERROR
  if (action.type === "SUBMIT_ERROR") {
    return {
      ...state,
      isEmpty: true,
      isTouched: true,
      isValid: false,
    };
  }

  // SUBMIT_SUCCESS
  if (action.type === "SUBMIT_SUCCESS") {
    return {
      isTouched: false,
      isEmpty: null,
      isValid: true,
      value: "",
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

  // SUBMIT_ERROR
  if (action.type === "SUBMIT_ERROR") {
    return {
      ...state,
      isEmpty: true,
      isEmail: false,
      isTouched: true,
      isValid: false,
    };
  }

  // SUBMIT_SUCCESS
  if (action.type === "SUBMIT_SUCCESS") {
    return {
      isTouched: false,
      isEmpty: null,
      isEmail: null,
      isValid: true,
      value: "",
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
const commentReducer = (state, action) => {
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
        isShort: action.value.trim().length < 25,
        value: action.value,
        isValid:
          action.value.trim().length !== 0 && action.value.trim().length >= 25,
      };
    }
  }

  // BLUR
  if (action.type === "BLUR") {
    return {
      ...state,
      isEmpty: action.value.trim().length === 0,
      isShort: action.value.trim().length < 25,
      value: action.value,
      isTouched: true,
      isValid:
        action.value.trim().length !== 0 && action.value.trim().length >= 25,
    };
  }

  // SUBMIT_ERROR
  if (action.type === "SUBMIT_ERROR") {
    return {
      ...state,
      isEmpty: true,
      isShort: true,
      isTouched: true,
      isValid: false,
    };
  }

  // SUBMIT_SUCCESS
  if (action.type === "SUBMIT_SUCCESS") {
    return {
      isTouched: false,
      isEmpty: null,
      isShort: null,
      isValid: true,
      value: "",
    };
  }

  return {
    isTouched: false,
    isEmpty: null,
    isShort: null,
    isValid: true,
    value: "",
  };
};

//////////////////////////////////////////////////////////////////
const LandingSection = (props) => {
  // States
  const [isLoading, setIsLoading] = useState(false);

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

  const [comment, dispatchComment] = useReducer(commentReducer, {
    isTouched: false,
    isEmpty: null,
    isShort: null,
    isValid: true,
    value: "",
  });

  // Context
  const alertContext = useContext(AlertContext);

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

  const handleCommentChange = (e) => {
    dispatchComment({ type: "CHANGE", value: e.target.value });
  };

  const handleCommentBlur = (e) => {
    dispatchComment({ type: "BLUR", value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.isEmpty === null ||
      email.isEmpty === null ||
      comment.isEmpty === null ||
      email.isEmail === null ||
      comment.isShort === null
    ) {
      if (name.isEmpty === null) dispatchName({ type: "SUBMIT_ERROR" });
      if (email.isEmpty === null || email.isEmail === null)
        dispatchEmail({ type: "SUBMIT_ERROR" });
      if (comment.isEmpty === null || comment.isShort === null)
        dispatchComment({ type: "SUBMIT_ERROR" });
      return;
    }

    if (
      name.isEmpty === true ||
      email.isEmpty === true ||
      comment.isEmpty === true ||
      email.isEmail === false ||
      comment.isShort === true
    ) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const chance = Math.random();

      if (chance > 0.5) {
        alertContext.onOpen(
          "success",
          `Thanks for your submission ${name.value}, we will get back to you shortly!`
        );
        dispatchName({ type: "SUBMIT_SUCCESS" });
        dispatchEmail({ type: "SUBMIT_SUCCESS" });
        dispatchComment({ type: "SUBMIT_SUCCESS" });
      } else {
        alertContext.onOpen(
          "error",
          "Something went wrong, please try again later!"
        );
      }

      setIsLoading(false);
    }, 2000);
  };

  return (
    <div
      className={styles.section}
      id="contactme-section">
      <h1 className={styles.header}>
        {isLoading ? "Loading..." : "Contact Me"}
      </h1>
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
          value={comment.value}
          onChange={handleCommentChange}
          onBlur={handleCommentBlur}
          className={`${styles.input} ${styles.textarea} ${
            !comment.isValid && styles.invalid
          }`}></textarea>
        <div className={styles.error}>
          {comment.isEmpty
            ? "Required"
            : comment.isShort && "Must be at least 25 characters"}
        </div>
        <button
          className={styles.button}
          type="submit"
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default LandingSection;
