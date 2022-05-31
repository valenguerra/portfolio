import { cs, parseBool } from "../app/util";

interface Props {
  children: React.ReactNode;
  primary?: boolean;
  expand?: boolean;
  disabled?: boolean;
  className?: string;
  submit?: boolean;
}

export const Button = ({ children, primary = false, expand = false, disabled = false, submit = false, className }: Props): JSX.Element => {
  return (
    <button
      disabled={disabled}
      type={submit ? "submit" : "button"}
      className={`
      rounded 
      bg-white 
      px-4 py-2 
      font-medium 
      shadow 
      transition 
      ${cs(expand, "flex-1")} 
      ${cs(primary, "text-slate-900 hover:bg-slate-300", "border border-white bg-opacity-0 text-white hover:bg-opacity-10")}
      ${cs(disabled, "cursor-default opacity-50")}
      ${className} 
      `}
    >
      {children}
    </button>
  );
};
