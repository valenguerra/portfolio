import { Icon } from "./Icon";

interface Props {
  goToNext: () => any;
  goToPrevious: () => any;
  currentPage: number;
  total: number;
  className?: string;
}

export const PageNav = ({
  currentPage,
  total,
  goToNext,
  goToPrevious,
  className,
}: Props): JSX.Element => {
  const previousIsDisabled = currentPage === 1;
  const nextIsDisabled = currentPage === total;

  return (
    <div className={"alignItems flex gap-3" + " " + className}>
      <Icon
        name="arrowLeft"
        onClick={previousIsDisabled ? undefined : goToPrevious}
        className={previousIsDisabled ? "opacity-50" : ""}
      />
      <span className="flex w-10 select-none justify-center text-white">
        {currentPage} / {total}
      </span>
      <Icon
        name="arrowRight"
        onClick={nextIsDisabled ? undefined : goToNext}
        className={nextIsDisabled ? "opacity-50" : ""}
      />
    </div>
  );
};
