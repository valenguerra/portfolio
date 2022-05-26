import curve from "../../assets/images/curve.png";
import profile from "../../assets/images/profile.png";

export const SuperTitle = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col-reverse items-center  gap-6 md:flex-row">
      <img
        src={curve}
        alt="curve"
        className="hidden h-20 md:inline-block md:h-28"
      />
      <div className="flex flex-col items-center gap-1 md:flex-1 md:items-start md:gap-4">
        <h1 className="flex text-3xl font-bold text-white md:text-5xl">
          Valentino Guerra
        </h1>
        <h2 className="ml-1 flex text-xl font-light text-white md:ml-2 md:text-3xl">
          React Frontend Developer
        </h2>
      </div>
      <img
        src={profile}
        alt="Valentino Guerra"
        className="h-24 rounded-full md:h-32"
      />
    </div>
  );
};
