import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: Props): JSX.Element => {
  return <h3 className={clsx("text-2xl font-semibold text-white", className)}>{children}</h3>;
};

export const Subtitle = ({ children, className }: Props): JSX.Element => {
  return <h4 className={clsx("text-xl font-semibold text-white ", className)}>{children}</h4>;
};

export const Paragraph = ({ children, className }: Props): JSX.Element => {
  return <p className={clsx("text-lg font-light text-white ", className)}>{children}</p>;
};

export const Bold = ({ children, className }: Props): JSX.Element => {
  return <span className={clsx("font-semibold ", className)}>{children}</span>;
};
