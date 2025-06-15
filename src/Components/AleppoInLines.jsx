import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import FlipCard from '../Components/FlipCard'
import Gif1 from '../assets/GIF/Aleppo-City-Behance-11-B.gif'
import useDeviceType from "../Hooks/useDeviceType";

const AleppoInLines = () => {

  const device = useDeviceType();

  // حلب في سطور
  const aleppoInLinesTitleRef = useRef(null);

  // البطاقات
  const leftCardRef = useRef(null)
  const rightCardRef = useRef(null)
  const centerCardRef = useRef(null)
  const flipCardsRef = useRef(null)
  const leftCardExtraRef = useRef(null);
  const rightCardExtraRef = useRef(null);



  useGSAP(() => {
    // حلب في سطور
    const el = aleppoInLinesTitleRef.current;

    // حلب في سطور
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom', // يبدأ قبل أن يظهر العنصر
          end: 'top center',   // ينتهي عند وسط الشاشة
          scrub: true,
          ease: 'none',
        },
      }
    );
  }, [])


  if(window.innerWidth <= 1280 && window.innerWidth >= 768) {
    console.log("ipad");
  } else if(window.innerWidth <= 767) {
    console.log("mobile");
  } else {
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        const center = centerCardRef.current;
        const left = leftCardRef.current;
        const right = rightCardRef.current;
        const leftExtra = leftCardExtraRef.current;
        const rightExtra = rightCardExtraRef.current;

        const centerTop = center.offsetTop;

        gsap.set([left, right], {
          position: "absolute",
          top: centerTop - 50,
          left: "50%",
          xPercent: -50,
          zIndex: 10,
        });

        gsap.set([leftExtra, rightExtra], {
          position: "absolute",
          top: centerTop + 250,
          left: "50%",
          xPercent: -50,
          zIndex: 10,
        });

        const introTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: flipCardsRef.current,
            start: "top center",
            toggleActions: "play none none none",
          },
        });


        introTimeline.to(left, {
          x: "-150%",
          top: centerTop,
          duration: 1,
          ease: "power2.out",
        });

        introTimeline.to(right, {
          x: "150%",
          top: centerTop,
          duration: 1,
          ease: "power2.out",
        }, "<");

        introTimeline.to(leftExtra, {
          x: "-150%",
          top: centerTop + 600,
          duration: 1,
          ease: "power2.out",
        }, "<");

        introTimeline.to(rightExtra, {
          x: "150%",
          top: centerTop + 600,
          duration: 1,
          ease: "power2.out",
        }, "<");

        gsap.to([left, right, leftExtra, rightExtra], {
          scrollTrigger: {
            trigger: flipCardsRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
          y: 500,
          ease: "none",
        });

      }, flipCardsRef);

      return () => ctx.revert();
    }, []);
  }

  


  return (
    <section id='aleppoInLines' className="h-[2200px] sm:h-[2200px] md:h-[1600px] lg:h-[2500px] text-black flex justify-center pt-10">
      <div className='flex flex-col'>
        <h1 ref={aleppoInLinesTitleRef} className="text-[60px] px-4 lg:md:sm:px-0 sm:text-[100px] md:text-[120px] lg:text-[200px] opacity-0 translate-y-[100px]">
          حلــــــــب فــــي سطــــــــور
        </h1>
        <h3 className='text-[22px] mr-[4%] lg:md:sm:mr-0 lg:md:sm:text-[30px]'>قم بالضغط على البطاقة لمعرفة المزيد عن حلــــــب</h3>
        

          {device === 'mobile' ? (
            <div className="grid grid-cols-2 gap-4 px-4 mt-10">
              {[1,2,3,4,5,6,7].map(id => (
                <FlipCard key={id} image={Gif1} id={id} />
              ))}
            </div>
          ) : device === 'tablet' ? (
            <div className="grid grid-cols-3 gap-6 px-8 mt-10">
              {[1,2,3,4,5,6,7].map(id => (
                <FlipCard key={id} image={Gif1} id={id} />
              ))}
            </div>
          ) : (
            <div ref={flipCardsRef} className="relative w-full flex justify-center items-start my-20 overflow-visible min-h-[600px]">
              {/* البطاقة المركزية (ثابتة في الوسط) */}
              <div className="w-[30%] flex flex-col gap-110 mt-[120%] lg:md:sm:mt-0 lg:md:sm:gap-0 z-20 ml-[60%] sm:ml-[68%] md:ml-[70%] lg:ml-[0%]" ref={centerCardRef}>
                <FlipCard image={Gif1} id={1} />
                <FlipCard image={Gif1} id={5} />
                <FlipCard image={Gif1} id={4} />
              </div>
    
              {/* البطاقة اليسرى */}
              <div ref={leftCardRef} className="absolute w-[30%] ml-[20%] sm:mt-[-20%] sm:ml-[-34%]  md:mt-[-20%] md:ml-[-40%] lg:mt-[0%] lg:ml-[10%]">
                <FlipCard image={Gif1} id={2} />
              </div>
    
              {/* البطاقة اليمنى */}
              <div ref={rightCardRef} className="absolute w-[30%] mt-[235%] ml-[20%] sm:mt-[60%] sm:ml-[-34%] md:mt-[60%] md:ml-[-40%] lg:mt-[0%] lg:ml-[-10%]">
                <FlipCard image={Gif1} id={3} />
              </div>
    
              {/* البطاقة اليسرى الإضافية */}
              <div ref={leftCardExtraRef} className="absolute w-[30%] mt-[460%] ml-[20%] sm:mt-[138%] sm:ml-[-34%] md:mt-[140%] md:ml-[-40%] lg:mt-[0%] lg:ml-[10%]">
                <FlipCard image={Gif1} id={6} />
              </div>
    
              {/* البطاقة اليمنى الإضافية */}
              <div ref={rightCardExtraRef} className="absolute w-[30%] mt-[690%] ml-[20%] sm:mt-[215%] sm:ml-[-34%] md:mt-[220%] md:ml-[-40%] lg:mt-[0%] lg:ml-[-10%]">
                <FlipCard image={Gif1} id={7} />
              </div>
            </div>
          )}




      </div>
    </section>
  );
};

export default AleppoInLines;
