import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import '../App.css'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import WelcomLetter from '../Components/WelcomLetter'
import Regions from '../Components/Regions'
import AleppoInLines from '../Components/AleppoInLines'
import TouristPlacesComponent from '../Components/TouristPlacesComponent'
import Governors from '../Components/Governors'
import Contact from '../Components/Contact'
import Loader from '../Components/Loader' // أضف هذا

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500);
      }
    }

    // تحميل مؤقت للصفحة (مثلاً يمكن ربطه بتحميل صور مستقبلًا)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // أو 1000ms

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div dir='rtl' className='w-full overflow-hidden'>
      <Hero />
      <WelcomLetter />
      <Regions />
      <AleppoInLines />
      <TouristPlacesComponent />
      <Governors />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
