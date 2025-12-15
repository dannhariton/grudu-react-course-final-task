import styles from "./Input.module.css";

export const Input = ({ placeholder, type }: { placeholder: string; type: string }) => {
  return <input className={styles.input} placeholder={placeholder} type={type} />;
};
