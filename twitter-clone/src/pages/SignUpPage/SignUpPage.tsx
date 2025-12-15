import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import styles from "./SignUpPage.module.css";

export const SignUpPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sign Up</h2>
        <Input placeholder="Email" type="text" />
        <Input placeholder="Password" type="text" />
        <Input placeholder="Username" type="text" />
        <Input placeholder="Full name" type="text" />
        <Button text="Sign Up" position="end" />
      </div>
      <p>
        Already have an account?{" "}
        <Link className={styles.link} to="/login">
          Log In
        </Link>
      </p>
    </section>
  );
};
