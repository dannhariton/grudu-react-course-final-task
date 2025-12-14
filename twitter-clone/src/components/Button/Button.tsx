import styles from "./Button.module.css";

type Position = "start" | "center" | "end" | "flex-start" | "flex-end";

type ButtonProps = {
  text: string;
  position?: Position;
};

export const Button = ({ text, position }: ButtonProps) => {
  return (
    <button style={{ alignSelf: position }} className={styles.button}>
      {text}
    </button>
  );
};
