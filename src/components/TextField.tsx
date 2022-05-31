import { ChangeEvent } from "react";

interface Props {
  name: string;
  placeholder: string;
  value: string;
  onChange: (val: string, name: string) => any;
  type?: "text" | "email";
  className?: string;
  textarea?: boolean;
}

export const TextField = ({ name, value, placeholder, type = "text", className, onChange, textarea = false }: Props): JSX.Element => {
  const params = {
    name,
    placeholder,
    value,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value, name),
    className: `flex gap-4 rounded border border-light-48/160 bg-transparent px-4 py-2 text-white placeholder:text-light-96/160 ${className}`,
  };

  if (textarea) return <textarea {...params} />;
  return <input type={type} {...params}/>;
};
