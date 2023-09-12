import { CSSProperties, ReactElement } from "react";

type ButtonProps<T> = {
  label: ReactElement<HTMLDivElement>;
  value: T;
  click?: () => void;
  customStyles?: CSSProperties;
};

const Button = <T extends unknown>({
  label,
  click,
  customStyles,
}: ButtonProps<T>) => (
  <button onClick={() => click?.()} style={customStyles} type="button">
    {label}
  </button>
);

export default Button;
