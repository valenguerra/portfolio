interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props): JSX.Element => {
  return <h2 className="text-2xl font-semibold text-white">{children}</h2>;
};

export const Subtitle = ({ children }: Props): JSX.Element => {
  return <h3 className="text-xl font-semibold text-white">{children}</h3>;
};

export const Paragraph = ({ children }: Props): JSX.Element => {
  return <p className="text-lg font-light text-white">{children}</p>;
};

export const Bold = ({ children }: Props): JSX.Element => {
  return <span className="font-semibold">{children}</span>;
};
