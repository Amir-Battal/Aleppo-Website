import { useState, useEffect } from 'react';

function useDeviceType() {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDevice('mobile');
      } else if (width >= 768 && width < 1280) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    updateDevice();
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return device;
}

export default useDeviceType;