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
          <h1 ref={textGovernorateRef} className='text-[150px] mt-80 text-[#171717] sm:text-[150px] md:text-[250px] lg:text-[300px]'>محافظة</h1>
          <img className='absolute w-[10%] mt-[-4%] mr-[10%] sm:w-[10%] md:w-[10%] lg:w-[10%] sm:mt-[-320px] md:mt-[-320px] lg:mt-[-320px] sm:mr-150 md:mr-150 lg:mr-150' src={icon1} alt="" />
          <img className='absolute w-[10%] mt-[-4%] mr-[18%] sm:w-[10%] md:w-[10%] lg:w-[10%] sm:mt-[-320px] md:mt-[-320px] lg:mt-[-320px] sm:mr-250 md:mr-250 lg:mr-250' src={icon2} alt="" />
          <img className='absolute w-[10%] mt-[-4%] mr-[26%] sm:w-[10%] md:w-[10%] lg:w-[10%] sm:mt-[-320px] md:mt-[-320px] lg:mt-[-320px] sm:mr-350 md:mr-350 lg:mr-350' src={icon3} alt="" />
          <img className='absolute w-[10%] mt-[-4%] mr-[34%] sm:w-[10%] md:w-[10%] lg:w-[10%] sm:mt-[-320px] md:mt-[-320px] lg:mt-[-320px] sm:mr-450 md:mr-450 lg:mr-450' src={icon4} alt="" />
          <img className='absolute w-[10%] mt-[-4%] mr-[42%] sm:w-[10%] md:w-[10%] lg:w-[10%] sm:mt-[-320px] md:mt-[-320px] lg:mt-[-320px] sm:mr-550 md:mr-550 lg:mr-550' src={icon5} alt="" />
          <img className='absolute w-[10%] mt-[-4%] mr-[50%] sm:w-[10%] md:w-[10%] lg:w-[10%] sm:mt-[-320px] md:mt-[-320px] lg:mt-[-320px] sm:mr-650 md:mr-650 lg:mr-650' src={icon6} alt="" />
          <img className='absolute w-[10%] mt-[-4%] mr-[58%] sm:w-[10%] md:w-[10%] lg:w-[10%] sm:mt-[-320px] md:mt-[-320px] lg:mt-[-320px] sm:mr-750 md:mr-750 lg:mr-750' src={icon7} alt="" />
          <img className='absolute w-[10%] mt-[-4%] mr-[66%] sm:w-[10%] md:w-[10%] lg:w-[10%] sm:mt-[-320px] md:mt-[-320px] lg:mt-[-320px] sm:mr-850 md:mr-850 lg:mr-850' src={icon8} alt="" />
          <img className='absolute w-[10%] mt-[-4%] mr-[74%] sm:w-[10%] md:w-[10%] lg:w-[10%] sm:mt-[-320px] md:mt-[-320px] lg:mt-[-320px] sm:mr-950 md:mr-950 lg:mr-950' src={icon9} alt="" />
          <img className='absolute w-[10%] mt-[-4%] mr-[82%] sm:w-[10%] md:w-[10%] lg:w-[10%] sm:mt-[-320px] md:mt-[-320px] lg:mt-[-320px] sm:mr-1050 md:mr-1050 lg:mr-1050' src={icon10} alt="" />
          <h1 className='text-[300px] sm:text-[600px] md:text-[600px] lg:text-[570px] mt-[-5%] sm:mt-[-350px] md:mt-[-350px] lg:mt-[-350px] text-[#171717]'>حــلــــــــــــــــــــــــــــــــــــــــــــــــــــــب</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
