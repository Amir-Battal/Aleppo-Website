import { useRef, useState } from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AleppoMap from "./AleppoMap";

const Regions = () => {

  const [selectedRegion, setSelectedRegion] = useState(null);

  // zone المنطقة
  const pulseRef = useRef(null);
  const pulseTimeline = useRef(null);

  useGSAP(() => {
    if (selectedRegion && pulseRef.current) {
      const circles = pulseRef.current.querySelectorAll('circle');

      // تنظيف الأنميشن السابق إن وُجد
      if (pulseTimeline.current) {
        pulseTimeline.current.kill();
        pulseTimeline.current = null;
      }

      // إعادة ضبط الحالة الابتدائية
      circles.forEach((circle) => {
        const bbox = circle.getBBox();
        const originX = bbox.x + bbox.width / 2;
        const originY = bbox.y + bbox.height / 2;

        gsap.set(circle, {
          scale: 0,
          opacity: 1,
          transformOrigin: '50% 50%',
          svgOrigin: `${originX} ${originY}`,
        });
      });


      // إعداد الـ timeline الجديد
      const tl = gsap.timeline();
      tl.to(circles, {
        scale: 3,
        opacity: 0,
        repeat: -1,
        repeatDelay: 0.5,
        stagger: 0.3,
        duration: 2,
        ease: 'power2.out',
      });

      pulseTimeline.current = tl;
    }

    return () => {
      if (pulseTimeline.current) {
        pulseTimeline.current.kill();
        pulseTimeline.current = null;
      }
    };
  }, [selectedRegion]);
  

  return (
    <section id='regions' className='bg-[#777F53] flex items-center justify-center font-bold'>
      <div dir='ltr' className='w-full flex flex-col-reverse lg:flex-row sm:gap-150 md:gap-170 lg:gap-10 justify-between px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20'>
        <div className='w-full lg:w-[60%]'>
          <Card region={selectedRegion} />
        </div>
        <div dir='ltr' className='flex flex-col gap-30 w-full lg:w-[70%] px-2'>
          <div dir='rtl' className="w-full flex flex-col gap-2 text-[#F3EDCD]">
            <h1 className='text-[48px] sm:text-4xl md:text-5xl lg:text-[90px]'>
              التقسيم الإداري لمحافظة حلب
            </h1>
            <h3 className='w-full lg:w-[60%] text-[20px] lg:text-[30px]'>قم بالضغط على المنطقة لمعرفة المزيد عنها</h3>
          </div>
          
          <div className="w-full mt-[60%] lg:ml-[8%] sm:mt-[2%] md:mt-[2%] lg:mt-[2%]">
            {selectedRegion && (
              <div ref={pulseRef} className='mt-[-85%] sm:mt-[-10%] md:mt-[-10%] lg:mt-[-10%] absolute w-[10%] h-[10%] z-2'>
                <svg className={`w-full h-full 
                  ${selectedRegion === 'efrin' ? 'mt-[140%] ml-[40%] md:mt-[170%] md:ml-[30%] lg:mt-[130%] lg:ml-[0%]'
                    : selectedRegion === 'atarb' ? 'mt-[355%] ml-[70%] md:mt-[395%] md:ml-[70%] lg:mt-[240%] lg:ml-[10%]'
                    : selectedRegion === 'azzaz' ? 'mt-[180%] ml-[200%] md:mt-[210%] md:ml-[200%] lg:mt-[150%] lg:ml-[80%]'
                    : selectedRegion === 'samaan' ? 'mt-[430%] ml-[160%] md:mt-[470%] md:ml-[150%] lg:mt-[280%] lg:ml-[60%]'
                    : selectedRegion === 'safira' ? 'mt-[480%] ml-[330%] md:mt-[520%] md:ml-[325%] lg:mt-[300%] lg:ml-[140%]'
                    : selectedRegion === 'dierHafer' ? 'mt-[350%] ml-[360%]  md:mt-[390%] md:ml-[360%] lg:mt-[235%] lg:ml-[156%]'
                    : selectedRegion === 'bab' ? 'mt-[200%] ml-[350%] md:mt-[235%] md:ml-[345%] lg:mt-[160%] lg:ml-[150%]'
                    : selectedRegion === 'jarables' ? 'mt-[90%] ml-[470%] md:mt-[120%] md:ml-[460%] lg:mt-[100%] lg:ml-[210%]'
                    : selectedRegion === 'menbag' ? 'mt-[250%] ml-[520%] md:mt-[285%] md:ml-[515%] lg:mt-[185%] lg:ml-[235%]'
                    : selectedRegion === 'einArab' ? 'mt-[80%] ml-[660%] md:mt-[110%] md:ml-[660%] lg:mt-[100%] lg:ml-[310%]'
                    : 'opacity-0'
                  }
                `} viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="35" stroke="#000" strokeWidth="4" fill="none" />
                  <circle cx="100" cy="100" r="35" stroke="#000" strokeWidth="4" fill="none" />
                  <circle cx="100" cy="100" r="35" stroke="#000" strokeWidth="4" fill="none" />
                </svg>
              </div>
            )}
            <AleppoMap selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;
