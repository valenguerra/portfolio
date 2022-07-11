import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  primary?: boolean;
  expand?: boolean;
  disabled?: boolean;
  className?: string;
  submit?: boolean;
  onClick?: () => any;
}

export const Button = ({
  children,
  primary = false,
  expand = false,
  disabled = false,
  submit = false,
  onClick,
  className,
}: Props): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={submit ? "submit" : "button"}
      className={clsx(
        "whitespace-nowrap rounded bg-white px-4 py-2 font-medium shadow transition",
        expand && "flex-1",
        disabled && "cursor-default opacity-50 hover:bg-white",
        primary ? "text-slate-900 hover:bg-slate-300" : "border border-white bg-opacity-0 text-white hover:bg-opacity-10",
        className
      )}
    >
      {children}
    </button>
  );
};
