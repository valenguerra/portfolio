interface Props {
  children: React.ReactNode;
  expand?: boolean;
}

export const Frame = ({ children, expand = false }: Props): JSX.Element => {
  return (
    <div
      className={`flex gap-4 rounded border border-light-12/160 px-4 py-2 text-white ${
        expand ? "flex-1" : ""
      }`}
    >
      {children}
    </div>
  );
};
