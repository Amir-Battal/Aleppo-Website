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
    <section ref={containerRef} className='h-[1000px] w-full overflow-hidden relative'>
      <HomeNavbar />
      <div className='w-full h-screen flex items-center mt-[-5%] justify-start px-10 md:px-10'>
        <div
          ref={textRef}
          className='whitespace-nowrap font-bold text-black'
          style={{ direction: 'rtl' }}
        >
          <h1 ref={textGovernorateRef} className='text-[150px] mt-80 text-[#171717] sm:text-[150px] md:text-[250px] lg:text-[300px]'>محافظة</h1>

          <div className='flex flex-col items-start'>
            <h1 className='text-[600px] sm:text-[600px] md:text-[600px] lg:text-[570px] mt-[-5%] sm:mt-[-350px] md:mt-[-350px] lg:mt-[-350px] text-[#171717]'>حــلــــــــــــــــــــــــــــــــــــــــــــــــــــــب</h1>

            <div className="absolute flex flex-row justify-between w-[85%] mr-[10%] top-[31%] sm:top-[27%] md:top-[36%] lg:top-[41%]">
              <img className='w-[10%]' src={icon1} alt="" />
              <img className='w-[10%]' src={icon2} alt="" />
              <img className='w-[10%]' src={icon3} alt="" />
              <img className='w-[10%]' src={icon4} alt="" />
              <img className='w-[10%]' src={icon5} alt="" />
              <img className='w-[10%]' src={icon6} alt="" />
              <img className='w-[10%]' src={icon7} alt="" />
              <img className='w-[10%]' src={icon8} alt="" />
              <img className='w-[10%]' src={icon9} alt="" />
              <img className='w-[10%]' src={icon10} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
