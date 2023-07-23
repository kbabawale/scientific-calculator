import { ReactElement } from "react";

type ButtonProps<T> = {
  label: ReactElement<HTMLDivElement>;
  value: T;
  click?: () => void;
};

const Button = <T extends unknown>({ label }: ButtonProps<T>) => (
  <button type="button">{label}</button>
);

export default Button;
