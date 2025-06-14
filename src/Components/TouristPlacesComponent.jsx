import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import CarouselCards from "./CarouselCards";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const TouristPlacesComponent = () => {

  // بعض الأماكن السياحية
  const aleppoTouristPlaceseRef = useRef(null);

  useGSAP(() => {
    // بعض الأماكن السياحية
    const ul = aleppoTouristPlaceseRef.current;


    if(window.innerWidth <= 1280 && window.innerWidth >= 768) {
    } else if(window.innerWidth <= 767) {
      gsap.fromTo(
        ul,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ul,
            start: 'top bottom', // يبدأ قبل أن يظهر العنصر
            end: 'top center',   // ينتهي عند وسط الشاشة
            scrub: true,
            ease: 'none',
          },
        }
      );
    } else {
      // بعض الأماكن السياحية في حلب
      gsap.fromTo(
        ul,
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ul,
            start: 'top bottom', // يبدأ قبل أن يظهر العنصر
            end: 'top center',   // ينتهي عند وسط الشاشة
            scrub: true,
            ease: 'none',
          },
        }
      );
    }
  }, [])

  return (
    <section id='touristPlaces' className="h-[1100px] sm:mt-[-25%] sm:mb-[30%] md:mt-[20%] md:mb-[20%] lg:mb-[0%] lg:mt-[0%] text-black flex text-center justify-center pt-15">
      <div className='flex flex-col'>
        <h1 ref={aleppoTouristPlaceseRef} className="text-[60px] sm:text-[100px] md:text-[120px] lg:text-[140px] opacity-0 translate-y-[100px]">
          بعض الأماكن السياحية في مدينة حلــــــب
        </h1>
        <div className='flex justify-center items-center'>
            <CarouselCards />
        </div>
        <Link to={'/tourist-places'} className='mt-[30%] text-[25px] w-full sm:w-[30%] sm:mt-60 md:w-[25%] md:mt-60 lg:w-[18%] lg:mt-42 p-5 flex flex-row gap-3 items-center bg-[#171717] text-[#F3EDCD] sm:text-2xl md:text-3xl lg:text-3xl hover:bg-[#efe598] hover:text-[#171717] cursor-pointer'>
          <h3 className="text-center w-[70%] lg:md:sm:w-auto">عرض المزيد من الأماكن</h3>
          <ChevronLeft />
        </Link>
      </div>
    </section>
  );
};

export default TouristPlacesComponent;
