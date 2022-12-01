import { createPortal } from "react-dom";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  return createPortal(
    <>
      <div className={styles.backdrop}>
        <div className={styles.spinner}></div>
      </div>
    </>,
    document.querySelector("#spinner")
  );
};

export default LoadingSpinner;
