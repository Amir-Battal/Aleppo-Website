const Azzaz = ({...props}) => {

  const isSelected = props.selectedRegion === 'azzaz';

  return (
    <div onClick={() => props.setSelectedRegion('azzaz')} className="group cursor-pointer">
      <svg 
        id="Layer_1" 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 2745.02 2590.99"
        className="absolute w-[20%] mt-[8.2%] ml-[14.8%]  lg:w-[10%] lg:mt-[4.1%] lg:ml-[7.45%]"
      >
        <path 
          d="M316.62,2590.99l-228.08-67.88L0,2400.26l70.62-704.4c141.02-68.9,413.29,154.56,470.92-35.16,53.63-176.54-64.71-361.97-168.53-493.3l112.54-242.85-150.21-81.02L640.87,98.84l66.45-8.74c101.47,229.83,291.69,183.61,315.98-76.85,83.76,70.98,139.02-2.6,178.33,3.07,33.94,4.9,64.4,87.75,116.86,91.7C1377.78,112.49,1526.73,4.84,1582.51.06c24.19-2.07,441.37,49.01,476.82,55.76,144,27.42,314.71,116.9,470.55,131.08l-88.76,272.4,183.22,129.37c17.49,349.7,372.55,774.02-224.2,801.71,20.05,228.13-212.69,399.83-250.75,627.6l-99.32-72.68-369.12,186.06-115.5-168.6-149.5-19.91c-112,19.31-185.21,176.4-277.62,199.48-148.37,37.06-373.91-10.36-521.28,12.33-50.6,7.79-147.32,88.35-243.5,63.65-17.26,8.19-56.94,81.91-56.94,95.81v276.87Z"
          className={`transition-colors duration-200 ${isSelected ? 'fill-[#F3EDCD]' : 'fill-black group-hover:fill-[#F3EDCD]'}`} 
        />
        <text
          x="1500" 
          y="1200" 
          fontSize="500" 
          className={`transition-colors duration-200 ${isSelected ? 'fill-black' : 'fill-[#F3EDCD] group-hover:fill-black'}`}
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          اعزاز
        </text>
      </svg>
    </div>
  );
};

export default Azzaz;
