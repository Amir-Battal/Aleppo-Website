const Atarb = ({...props}) => {

  const isSelected = props.selectedRegion === 'atarb';


  return (
    <div onClick={() => props.setSelectedRegion('atarb')} className="group cursor-pointer">
      <svg 
        id="Layer_1" 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 2451.29 2103.06"
        className="absolute w-[11.4%] mt-[29.47%] ml-[6.6%] lg:w-[5.7%] lg:mt-[14.735%] lg:ml-[3.3%] z-1"
      >
        <path 
          d="M866.64,34.71c11.27,6.05,61.15,148.34,144.86,210.81,316.42,236.14,619.2,110.3,923.68,126.3,171.06,8.99,363.15,186.93,516.12,12.75l-15.02,668.71c-312.5-11.96-257.01,129.72-402.73,245.97-120.31,95.97-272.7,54.31-323.84,264.27-50.66,208.02,71.75,406.17-234.49,539.54l-97.81-148.95-319.46,25.62-94.61-292.87c-298.09-161.5-493.26,118.79-745.08-186.19l91.79-337.09C108.21,1059.42-95.39,899.26,48.29,645.07l329.72-72.71c100.59-155.13,155.79-716.25,488.63-537.65Z"
          className={`transition-colors duration-200 ${isSelected ? 'fill-[#F3EDCD]' : 'fill-black group-hover:fill-[#F3EDCD]'}`} 
        />
        <text
          x="1200" 
          y="1100" 
          fontSize="500" 
          className={`transition-colors duration-200 ${isSelected ? 'fill-black' : 'fill-[#F3EDCD] group-hover:fill-black'}`}
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          الاتارب
        </text>
      </svg>
    </div>
  );
};

export default Atarb;
