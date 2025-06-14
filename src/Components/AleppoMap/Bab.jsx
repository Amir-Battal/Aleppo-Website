const Bab = ({...props}) => {

  const isSelected = props.selectedRegion === 'bab';

  return (
    <div onClick={() => props.setSelectedRegion('bab')} className="group cursor-pointer">
      <svg 
        id="Layer_1" 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1932.81 2739.92"
        className="absolute w-[17.6%] mt-[5.6%] ml-[30.2%] lg:w-[8.8%] lg:mt-[2.8%] lg:ml-[15.1%]"
      >
        <path 
          d="M1432.96,470.25l130.78,111.71-24.43,268.56,123.83,43.23-29.65,161.53-31.1-47.05,5.14,58.41,183.46,36.56c-14.7,68.55,68.76,158.85,141.82,141.24l-118.08,173.44,39.19,157.16c-20.88-52.16-58.93,99.38-58.37,111.49,3.27,70.11,171.62,264.41,121.24,376.38l-62.49-47.1-59.78,120.8,28.22,115.3,62.81,47.07-315.13,125.83-31.04-31.17-71.51,157.69c-99.08-26.57-259.28,61.62-329.63,55.51-52.72-4.58-96.23-90.83-157.61-55.61l7.72-31.61c-225.63,131.22-373.11-26.83-598.3,63.08l-39.49,63.02-70.01-31.35-16.47,125.55-108.2-2.03-33.69-218.51-31.09,15.87c-68.3-180.42-128.3-357.01-63.02-550.95l31.1,31.3,227.74-551.63,240.65-81.97c101.94-229.99-54-426.98-62.3-653.9l-154.02-82.29,65.27-154.65c134.5-53.31,183.86,108.84,342.73,19.78,88.58-49.66,41.62-133.9,86.97-196.42L1421.06,0l11.9,470.25Z"
          className={`transition-colors duration-200 ${isSelected ? 'fill-[#F3EDCD]' : 'fill-black group-hover:fill-[#F3EDCD]'}`} 
        />
        <text
          x="1000" 
          y="1500" 
          fontSize="400" 
          className={`transition-colors duration-200 ${isSelected ? 'fill-black' : 'fill-[#F3EDCD] group-hover:fill-black'}`}
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          الباب
        </text>
      </svg>
    </div>
  );
};

export default Bab;
