const DierHafer = ({...props}) => {

  const isSelected = props.selectedRegion === 'dierHafer';

  return (
    <div onClick={() => props.setSelectedRegion('dierHafer')} className="group cursor-pointer">
      <svg 
        id="Layer_1" 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 2668.3 1474.41"
        className="absolute w-[18.58%] mt-[27.6%] ml-[33.16%] lg:w-[9.29%] lg:mt-[13.8%] lg:ml-[16.58%] z-1"
      >
        <path 
          d="M1746.42,0l235.06,267.59c246.37,82.29,508.27-214.84,686.82-89-5.73,129.41-508.22,275.32-617.52,378.6-167.9,158.65-353.09,668.72-362.32,901.75-44.24,56.08-568.12-58.46-683.96-56.67-89.2,1.38-393.51,98.07-438.79,63.1-66.48-101.51-32.9-226.46-87.27-332.55-33.46-65.3-175.96-138.98-215.58-241.52-31.64-81.89-42.82-345.9-102.16-430.26L0,368.13c125.41-43.05,178.55-131.15,329.07-139.5,134.69-7.47,194.66,58.97,278.54,60.98,98.04,2.35,126.07-70,200.25-80.69,115.02-16.58,123.55,69.79,195.96,80.84,47.56,7.26,408.91-30.19,454.72-46.07,147.79-51.21,169.26-198.74,169.26-198.74L1746.42,0Z"
          className={`transition-colors duration-200 ${isSelected ? 'fill-white' : 'fill-black group-hover:fill-white'}`} 
        />
        <text
          x="1100" 
          y="900" 
          fontSize="350" 
          className={`transition-colors duration-200 ${isSelected ? 'fill-black' : 'fill-white group-hover:fill-black'}`}
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          دير حافر
        </text>
      </svg>
    </div>
  );
};

export default DierHafer;
