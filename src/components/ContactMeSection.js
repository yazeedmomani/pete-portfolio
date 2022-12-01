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
        <input
          type="text"
          id="type"
          className={styles.input}
        />
        <label
          htmlFor="message"
          className={styles.label}>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className={`${styles.input} ${styles.textarea}`}></textarea>
      </form>
    </div>
  );
};

export default LandingSection;
