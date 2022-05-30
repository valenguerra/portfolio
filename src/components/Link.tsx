interface Props {
  children: React.ReactNode;
  to?: string;
}

export const Link = ({ children, to }: Props): JSX.Element => {
  return (
    <a href={to} target="_blank" className="py-1/2 inline-flex cursor-pointer rounded bg-white bg-opacity-10 px-2 text-sm font-light text-white transition hover:bg-opacity-20">
      {children}
    </a>
  );
};
