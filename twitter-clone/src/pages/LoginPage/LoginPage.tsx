import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Log In</h2>
        <Input placeholder="Username" type="text" />
        <Input placeholder="Password" type="text" />
        <Button text="Log In" position="end" />
      </div>
      <p>
        Don't have an account?{" "}
        <Link className={styles.link} to="/signup">
          Sign Up
        </Link>
      </p>
    </section>
  );
};
