const Efrin = ({...props}) => {

  const isSelected = props.selectedRegion === 'efrin';

  return (
    <div onClick={() => props.setSelectedRegion('efrin')} className="group cursor-pointer">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2143.78 2780.66"
        className="absolute w-[20%] lg:w-[10%]"
      >
        <path  
          d="M483.35,2638.09c-4.23-2.26-21.63-82.39-32.57-90.27-18.69-13.45-191.77-23.32-226.61-1.28l61.59-98.86c-93.94-31.25-44.34-107.51-71.42-172.62-10.87-26.13-45.56-13.36-51.85-28.06C85.13,2066.33,44.46,1893.22,0,1702.32c86.52-86.94,200.45-330.63,202.57-450.97,1.43-80.92-104.36-249.23-53.62-369.95l224.52-235.44-42.46-238.02C428.5,255.49,555.39,184.11,596.91,0c295.57-1.01,524.71,233.47,827.58,271.6,88.44,11.13,167.93-27.03,199.68-24.15,4.06.37,25.86,51.32,52.18,62.65,65.46,28.17,184.81,83.3,239.66,72.04l-.26,98.75,172.36,26.52,55.67,64.57c-3.34,165.89-175.38,156.06-136.29,313.26h61.16c-27.68,256.67-267.46,410.65-244.03,685.92l105.78,24.79-76.72,196.26c60.97,126.2,180.26,231,130.63,388.04l-57.71,43.62c-102.56-66.41-196.6-67.4-312.79-40.61-55.81,48.23,54.06,997.63-307.18,401.3-39.62-80.9-215.3-48.41-264.14-8.67-39.47,32.11-26.7,137.14-162.84,108.04l-8-75.79-159.72-46.36.07,76.3h-228.64Z" 
          className={`transition-colors duration-200 ${isSelected ? 'fill-[#F3EDCD]' : 'fill-black group-hover:fill-[#F3EDCD]'}`} 
        />
        <text
          x="900" 
          y="1400" 
          fontSize="400" 
          className={`transition-colors duration-200 ${isSelected ? 'fill-black' : 'fill-[#F3EDCD] group-hover:fill-black'}`}
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          عفرين
        </text>
      </svg>
    </div>
  );
};

export default Efrin;
