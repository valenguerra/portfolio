interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props): JSX.Element => {
  return <h3 className="text-2xl font-semibold text-white">{children}</h3>;
};

export const Subtitle = ({ children }: Props): JSX.Element => {
  return <h4 className="text-xl font-semibold text-white">{children}</h4>;
};

export const Paragraph = ({ children }: Props): JSX.Element => {
  return <p className="text-lg font-light text-white">{children}</p>;
};

export const Bold = ({ children }: Props): JSX.Element => {
  return <span className="font-semibold">{children}</span>;
};
