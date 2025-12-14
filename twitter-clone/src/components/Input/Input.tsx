import styles from "./Input.module.css";

export const Input = ({ placeholder }: { placeholder: string }) => {
  return <input className={styles.input} placeholder={placeholder} />;
};
