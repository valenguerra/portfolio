interface Props {
  children: React.ReactNode;
  primary?: boolean;
  expand?: boolean;
}

export const Button = ({
  children,
  primary = false,
  expand = false,
}: Props): JSX.Element => {
  let classes = "rounded bg-white px-4 py-2 font-medium transition shadow";
  if (expand) classes += " flex-1";
  classes += primary
    ? " text-slate-900 hover:bg-slate-300"
    : " border border-white bg-opacity-0 text-white hover:bg-opacity-10";

  return <button className={classes}>{children}</button>;
};
