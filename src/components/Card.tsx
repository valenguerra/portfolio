interface Props {
  children: React.ReactNode;
}

export const Card = ({ children }: Props): JSX.Element => {
  return (
    <section
      className="
      flex
      w-full
      flex-col
      gap-8
      rounded-xl
      border
      bg-light-6/160
      border-light-12/160
      py-6
      px-8
      backdrop-blur-md
      "
    >
      {children}
    </section>
  );
};
