import bg01 from "../../assets/images/bg01.png";
import bg02 from "../../assets/images/bg02.png";
import bg03 from "../../assets/images/bg03.png";
import bg04 from "../../assets/images/bg04.png";


export const Background = (): JSX.Element => {
  return (
    <div className='absolute inset-0 -z-10'>
      <img src={bg01} alt="Mountains"/>
      <img src={bg02} alt="Cave"/>
      <img src={bg03} alt="Submarine cave"/>
      <img src={bg04} alt="Deep ocean"/>
    </div>
  );
};
