import { useRef } from "react";
import icon1 from "../assets/PNG/Aleppo Icons-01.png";
import icon2 from "../assets/PNG/Aleppo Icons-02.png";
import icon3 from "../assets/PNG/Aleppo Icons-03.png";
import icon4 from "../assets/PNG/Aleppo Icons-04.png";
import icon5 from "../assets/PNG/Aleppo Icons-05.png";
import icon6 from "../assets/PNG/Aleppo Icons-06.png";
import icon7 from "../assets/PNG/Aleppo Icons-07.png";
import icon8 from "../assets/PNG/Aleppo Icons-08.png";
import icon9 from "../assets/PNG/Aleppo Icons-09.png";
import icon10 from "../assets/PNG/Aleppo Icons-10.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import HomeNavbar from "./HomeNavbar";


const Hero = () => {
  const containerRef = useRef(null)
  // حلب
  const textRef = useRef(null)
  // محافظة
  const textGovernorateRef = useRef(null)


  useGSAP(() => {
    // حلب
    const textEl = textRef.current



    // حلب
    gsap.to(textEl, {
      x: () => -(window.innerWidth - textEl.scrollWidth - 50), // نحرك الكلمة بحيث تنتهي في أقصى يسارها
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${textEl.scrollWidth}`, // مدة التمرير تتناسب مع طول النص
        scrub: 1,
        pin: true,
      },
    })

    // محافظة
    SplitText.create(textGovernorateRef.current, { 
      type: 'lines',
      autoSplit: true,
      mask: 'lines',
      onSplit: (self) => {
        gsap.from(self.lines, {
          duration: 1,
          xPercent: 100,
          opacity: 0,
          stagger: 0.05,
          ease: "expo.out",
        });
      }
    })
  }, [])

  return (
    <section ref={containerRef} className='h-screen w-full overflow-hidden relative'>
      <HomeNavbar />
      <div className='w-full h-screen flex items-center justify-start px-10 md:px-10'>
        <div
          ref={textRef}
          className='whitespace-nowrap font-bold text-black'
          style={{ direction: 'rtl' }}
        >
          <h1 ref={textGovernorateRef} className='text-[300px] mt-80 text-[#171717] sm:text-[150px] md:text-[250px] lg:text-[300px]'>محافظة</h1>
          <img className='absolute w-[10%] mt-[-320px] mr-200' src={icon1} alt="" />
          <img className='absolute w-[10%] mt-[-320px] mr-300' src={icon2} alt="" />
          <img className='absolute w-[10%] mt-[-320px] mr-400' src={icon3} alt="" />
          <img className='absolute w-[10%] mt-[-320px] mr-500' src={icon4} alt="" />
          <img className='absolute w-[10%] mt-[-320px] mr-600' src={icon5} alt="" />
          <img className='absolute w-[10%] mt-[-320px] mr-700' src={icon6} alt="" />
          <img className='absolute w-[10%] mt-[-320px] mr-800' src={icon7} alt="" />
          <img className='absolute w-[10%] mt-[-320px] mr-900' src={icon8} alt="" />
          <img className='absolute w-[10%] mt-[-320px] mr-1000' src={icon9} alt="" />
          <img className='absolute w-[10%] mt-[-320px] mr-1100' src={icon10} alt="" />
          <h1 className='text-[600px] mt-[-350px] text-[#171717]'>حـــلــــــــــــــــــــــــــــــــــــــــــــــــــــــب</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
