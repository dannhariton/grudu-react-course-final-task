import { Link } from "react-router";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Log In</h2>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button text="Log In" position="end" />
      </div>
      <p>
        Don't have an account? <Link to="/">Sign Up</Link>
      </p>
    </section>
  );
};
