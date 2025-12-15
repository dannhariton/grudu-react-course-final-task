import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <section className={styles.homepage}>
      <h1>Welcome to Twitter Clone</h1>
      <p>
        Please proceed to{" "}
        <Link className={styles.link} to="/login">
          Log In
        </Link>{" "}
        or{" "}
        <Link className={styles.link} to="/signup">
          Sign Up
        </Link>
      </p>
    </section>
  );
};
