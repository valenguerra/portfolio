interface Props {
  children: React.ReactNode;
  onClick?: () => {};
}

export const Link = ({ children, onClick }: Props): JSX.Element => {
  return (
    <span
      onClick={onClick}
      className="py-1/2 inline-flex cursor-pointer rounded bg-white bg-opacity-10 px-2 text-sm font-light text-white transition hover:bg-opacity-20"
    >
      {children}
    </span>
  );
};
