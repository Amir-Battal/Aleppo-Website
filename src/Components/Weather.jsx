import axios from "axios";
import { ThermometerSun } from "lucide-react";



const Weather = async () => {
  
  const weather = await axios.get('http://api.weatherapi.com/v1/current.json?key=5019e7881e504e23bb3174509251106&q=Aleppo&aqi=no').then(response => response.data)

  return (
    <div className='flex flex-col mr-[2%] items-center'>
      <ThermometerSun size={50} className="w-8 h-8" fill='#000' />
      <h3 className='text-[25px] md:text-2xl'>{weather.current.temp_c}</h3>
    </div>
  );
};

export default Weather;
