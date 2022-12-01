import styles from "./ContactMeSection.module.css";

const LandingSection = (props) => {
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
          className={styles.input}
        />
      </form>
    </div>
  );
};

export default LandingSection;
