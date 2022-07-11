interface Props {
  children: React.ReactNode;
  expand?: boolean;
  className?: string;
  onHover?: () => any;
  onLeaveHover?: () => any;
  onClick?: () => any;
}

export const Frame = ({ children, expand = false, className, onHover, onLeaveHover, onClick }: Props): JSX.Element => {
  return (
    <div
      className={`flex gap-4 rounded border border-light-12/160 px-4 py-2 text-white ${expand ? "flex-1" : ""} ${className}`}
      onClick={onClick}
      onMouseOver={onHover}
      onMouseLeave={onLeaveHover}
    >
      {children}
    </div>
  );
};
