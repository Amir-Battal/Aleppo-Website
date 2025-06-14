const Jarables = ({...props}) => {

  const isSelected = props.selectedRegion === 'jarables';

  return (
    <div onClick={() => props.setSelectedRegion('jarables')} className="group cursor-pointer">
      <svg 
        id="Layer_1" 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 2668.3 2168.17"
        className="absolute w-[17.4%] mt-[1%] ml-[43.4%] lg:w-[8.7%] lg:mt-[0.5%] lg:ml-[21.7%] z-1"
      >
        <path 
          d="M2487.09,1373.46c-121.88,93.38-337.62,152-465.62,245.12-175.24-166.88-157.08-296.32-120.62-524.43-249.27-1.64-193.45,306.7-406.96,307.63-216.39-10.88-437.86-468.02-616.13,23.01l-258.69,63.79-153.33,679.59-186.44-.58c105.85-133.29,84.33-353.07-109.76-328.49l42.9-271.79c-14.53-123-172.34-209.12-174.27-225.46C17.48,1166,117.65,829.85,0,666.61l75.64-72.7c157.88,86.03,224.62-56.55,280.25-60.99,85.57-6.82,408.95,82.19,499.53,53.42,49.21-15.63,53.55-84.87,96.5-101.71,164.12-64.33,534.81-144,670.67-222.1,40.89-23.51,96.19-143.49,191.78-186.52,97.87-44.06,491.78-148.44,543.32,3.85-4.3,131.75-55.31,192.09-30.54,336.14,25.21,146.6,146.62,205.82,171.52,266.61,50.53,123.34,31.18,393.49,169.27,510.35,7.46,71.37-104.2,43.59-131.77,64.99-33.16,25.74-25.54,97.47-49.09,115.51Z"
          className={`transition-colors duration-200 ${isSelected ? 'fill-white' : 'fill-black group-hover:fill-white'}`} 
        />
        <text
          x="1200" 
          y="900" 
          fontSize="350" 
          className={`transition-colors duration-200 ${isSelected ? 'fill-black' : 'fill-white group-hover:fill-black'}`}
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          جرابلس
        </text>
      </svg>
    </div>
  );
};

export default Jarables;
