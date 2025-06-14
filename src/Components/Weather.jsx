import axios from "axios";
import { ThermometerSun } from "lucide-react";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.weatherapi.com/v1/current.json?key=5019e7881e504e23bb3174509251106&q=Aleppo&aqi=no'
        );
        setWeather(response.data);
      } catch (error) {
        console.error("فشل جلب الطقس:", error.message);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className='flex flex-col mr-[2%] items-center'>
      <ThermometerSun size={50} className="w-8 h-8" fill='#000' />
      <h3 className='text-[25px] md:text-2xl'>
        {weather ? `${weather.current.temp_c}°C` : "جاري التحميل..."}
      </h3>
    </div>
  );
};

export default Weather;
