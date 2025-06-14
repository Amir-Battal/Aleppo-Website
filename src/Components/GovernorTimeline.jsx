import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Instagram } from "lucide-react";
import '../App.css';
import XAppIcon from "../assets/Icons/XAppIcon";

gsap.registerPlugin(ScrollTrigger);

const GovernorTimeline = ({ data }) => {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.querySelectorAll(".timeline-item"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-[#777F53] px-10 sm:px-20 py-20" dir="rtl" ref={containerRef}>
      <h2 className="text-[40px] sm:text-[58px] md:text-[85px] lg:text-[140px] text-[#F3EDCD] text-center mb-20">
        التسلســــل الزمنــــي للمحافظيــــن
      </h2>

      <div className="relative">
        {/* الخط الزمني */}
        <div className="absolute top-1/2 left-[5%] lg:md:sm:left-[2.3%] w-[94.4%] lg:md:sm:w-[95.4%] h-[3px] bg-gradient-to-r from-white/90 to-white/40 z-0" />

        {/* العناصر */}
        <div className="relative z-10 flex flex-row justify-between items-center w-full max-w-full mx-auto">
          {data.map((gov, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className="timeline-item flex flex-col items-center relative w-[5%] lg:md:sm:w-[60px] sm:w-[80px] group"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {isEven && (
                  <span className="flex flex-col items-center gap-2 ml-[100%] lg:md:sm:ml-0 mt-[520%] sm:mt-[280%] md:mt-[190%] lg:mt-[150%] whitespace-nowrap">
                    <div className="w-[2px] h-5 bg-[#F3EDCD]" />

                    <div className="w-5 h-5 lg:md:sm:w-6 lg:md:sm:h-6 bg-[#F3EDCD] rounded-full border-[3px] border-[#171717] shadow-md z-10 transition-transform duration-300 group-hover:scale-110 cursor-pointer" />
                    
                    <h3 className="text-[#F3F1F3] text-[20px]">{gov.startDate.split("-")[0]}</h3>
                  </span>
                )}




                {!isEven && (
                  <span className="flex flex-col items-center gap-2 ml-[100%] lg:md:sm:ml-0 mb-[500%] sm:mb-[250%] md:mb-[185%] lg:mb-[140%] whitespace-nowrap">

                    <h3 className="text-[#F3F1F3] text-[20px]">{gov.startDate.split("-")[0]}</h3>

                    <div className="w-5 h-5 lg:md:sm:w-6 lg:md:sm:h-6 bg-[#F3EDCD] rounded-full border-[3px] border-[#171717] shadow-md z-10 transition-transform duration-300 group-hover:scale-110 cursor-pointer" />
                    
                    <div className="w-[2px] h-5 bg-[#F3EDCD]" />
                  </span>
                )}

                {/* البطاقة */}
                {hoveredIndex === i && (
                  <div
                    className={`absolute w-25 lg:md:sm:w-64 bg-[#F3EDCD] shadow-2xl p-1 lg:md:sm:p-5 text-center z-50 animate-fadeIn border-2 border-[#777F53] ${
                      isEven ? "top-full mt-[-10%]" : "bottom-full mb-[-5%]"
                    }`}
                  >
                    <img
                      src={gov.image}
                      alt={gov.name}
                      className="w-full object-cover mb-3 shadow-sm"
                    />
                    <h4 className="font-bold text-md lg:md:sm:text-lg text-[#171717]">{gov.name}</h4>
                    <h4 className="font-bold text-md lg:md:sm:text-lg text-[#171717]">{gov.startDate} / {gov.endDate}</h4>
                    {gov.social && (
                      <div className="flex flex-row justify-center gap-4 mt-2 text-[#777F53] text-[20px]">
                        <a href={gov.social.instagram} target="_blank" rel="noreferrer">
                          <Instagram />
                        </a>
                        <a href={gov.social.facebook} target="_blank" rel="noreferrer">
                          <Facebook />
                        </a>
                        <a href={gov.social.x} target="_blank" rel="noreferrer">
                          <XAppIcon />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row md:gap-8 lg:gap-0 justify-between mt-[50px]">
        <div className="md:w-[50%] lg:w-[65%] text-[#F3EDCD]">
          <h1 className="text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px]">المحافــــظ الحالــــي</h1>
          <h2 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]">{data[data.length - 1].name}</h2>
          <p className="text-[20px]">{data[data.length - 1].startDate} / {data[data.length - 1].endDate}</p>
          <p style={{ fontFamily: "Readex-Pro"}} className="text-[13px] sm:text-[14px] md:text-[14px] lg:text-[16px]">{data[data.length - 1].description}</p>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-[25px] sm:text-[22px] md:text-[25px] lg:text-[30px]">النشأة والدراسة</h3>
              <div className="flex flex-col gap-2">
                <p style={{ fontFamily: "Readex-Pro"}} className="text-[13px] sm:text-[14px] md:text-[14px] lg:text-[16px]">{data[data.length - 1].born}</p>
                <p style={{ fontFamily: "Readex-Pro"}} className="text-[13px] sm:text-[14px] md:text-[14px] lg:text-[16px]">{data[data.length - 1].education}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[25px] sm:text-[22px] md:text-[25px] lg:text-[30px]">المسيرة المهنية</h3>
              <p style={{ fontFamily: "Readex-Pro"}} className="text-[13px] sm:text-[14px] md:text-[14px] lg:text-[16px]">{data[data.length - 1].career}</p>
            </div>
          </div>
        </div>
        <img className="md:w-[50%] lg:w-[30%] mt-[1%] sm:h-[350px] md:h-[650px] lg:h-[550px] md:object-cover lg:object-cover sm:object-top sm:object-cover border-4 border-[#F3EDCD]" src={data[data.length - 1].image} alt="" />
      </div>
    </section>
  );
};

export default GovernorTimeline;
