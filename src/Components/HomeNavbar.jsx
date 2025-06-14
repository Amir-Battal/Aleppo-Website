import Weather from "./Weather";
import AleppoLogo from "../assets/Logo Design/PNG/City of Aleppo Logo Design-17 cut.png"


const HomeNavbar = () => {

  return (
    <div className='absolute h-[100px] mt-[2%] flex flex-row items-center justify-between'>
      <Weather />
      <a className='w-[18%] flex justify-end z-1' href="/">
        <img className='w-full lg:mt-[10%] ml-[15%] sm:mt-[-5%]' src={AleppoLogo} alt="" />
      </a>
    </div>
  );
};

export default HomeNavbar;
