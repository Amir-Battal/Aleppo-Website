import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, MapPin, Phone } from "lucide-react";

import AleppoLogo from "../assets/Logo Design/PNG/City of Aleppo Logo Design-17 cut.png"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Footer from "../Components/Footer";
import { hotelAndRestaurantsData, religiousPlaces1Data, religiousPlaces2Data, touristPlaces1Data, touristPlaces2Data, touristPlaces3Data, touristPlaces4Data } from "../assets/Data/touristPlacesData";


const touristPlaces1 = touristPlaces1Data;
const touristPlaces2 = touristPlaces2Data;
const touristPlaces3 = touristPlaces3Data;
const touristPlaces4 = touristPlaces4Data;
const religiousPlaces1 = religiousPlaces1Data;
const religiousPlaces2 = religiousPlaces2Data;
const hotelsAndRestaurants = hotelAndRestaurantsData;


if(window.innerWidth <= 1280 && window.innerWidth >= 768) {
    console.log("ipad");
  } else if(window.innerWidth <= 767) {
    console.log("mobile");
  } else {}


const HorizontalAccordion = ({ data, title }) => {
  const [selectedId, setSelectedId] = useState(data[0].id);
  const [showContent, setShowContent] = useState(null);

  const titleRef = useRef(null);

  useGSAP(() => {
    const el = titleRef.current;


    if(window.innerWidth <= 1280 && window.innerWidth >= 768) {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 120,
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
      console.log("ipad");
    } else if(window.innerWidth <= 767) {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 220,
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
      console.log("mobile");
    } else {
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
    }
  }, [])
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(selectedId);
    }, 350);

    return () => clearTimeout(timeout); // تنظيف عند تغيير العنصر
  }, [selectedId]);

  return (
    <div className="mt-20 mb-10">
      <h2 ref={titleRef} className="text-[40px] sm:text-[70px] md:text-[80px] lg:text-[100px] my-20 text-center">{title}</h2>

      <div className="flex overflow-hidden">
        {data.map((place) => {
          const isSelected = selectedId === place.id;
          const shouldShowContent = showContent === place.id;

          return (
            <div
              key={place.id}
              onClick={() => setSelectedId(place.id)}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = place.hoverColor || place.color;
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = place.color;
                }
              }}
              className={`relative transition-all duration-500 ease-in-out ${
                isSelected ? "w-[60vw] sm:w-[60vw] md:w-[70vw] lg:w-[80vw]" : "w-[9vw] sm:w-[9vw] md:w-[5.05vw] lg:w-[5.05vw] cursor-pointer"
              } h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden`}
              style={{
                backgroundColor: place.color,
                color: place.textColor,
                backgroundImage: isSelected ? `url(${place.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3
                className={`font-bold absolute z-10 ${
                  isSelected
                    ? "text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] top-5 right-10 rotate-0 text-shadow-lg/20"
                    : "text-[20px] lg:md:sm:text-[30px] -rotate-90 w-[80vh] mt-[40vh] mr-[-38.5vh] sm:mr-[-37.2vh] md:mr-[-38vh] lg:mr-[-36.5vh]"
                }`}
              >
                {place.title}
              </h3>

              {isSelected && (
                <div className="absolute bottom-0 w-full sm:h-[55%] md:h-[30%] lg:h-[30%] bg-black/60 text-white p-6 z-10 flex flex-col justify-between transition-opacity duration-300 ease-in-out">
                  <p
                    className={`sm:text-[30px] md:text-[25px] lg:text-[50px] font-light leading-snug transition-opacity duration-300 ${
                      shouldShowContent ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {place.description}
                  </p>
                  <a
                    target="_blank"
                    href={place.map}
                    className={`flex items-center gap-3 mt-4 transition-opacity duration-300 ${
                      shouldShowContent ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <MapPin />
                    <span className="text-md sm:text-xl md:text-xl lg:text-xl">{place.location}</span>
                  </a>
                  {place.phone && (
                    <div
                      className={`flex items-center gap-3 mt-2 transition-opacity duration-300 ${
                        shouldShowContent ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Phone />
                      <span dir="ltr" className="text-md lg:md:sm:text-xl">{place.phone}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};



const TouristPlaces = () => {
  const allPlaces = [
    touristPlaces1, 
    touristPlaces2, 
    touristPlaces3, 
    touristPlaces4,
    religiousPlaces1,
    religiousPlaces2,
    hotelsAndRestaurants
  ];
  const titles = [
    "القــــــلاع والخانــــــات",
    "المــــدارس و دُور الثقافــــة",
    "الاســــواق والحمامــــات وأماكن ثقافيــــة وترفيهيــــة",
    "بعض أبــــواب مدينة حلــــب القديمــــة",
    "بعض الأماكن الدينيــــة الجزء الأول",
    "بعض الأماكن الدينيــــة الجزء الثاني",
    "الفنــــادق والمطاعــــم"
  ];

  const sectionRefs = useRef([]);


  useEffect(() => {
    sectionRefs.current = allPlaces.map((_, i) => sectionRefs.current[i] ?? React.createRef());
    window.scrollTo(0, 0);


    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500);
      }
    }
  }, []);

  return (
    <div dir="rtl">
      {/* Header */}
      <div className="w-full flex flex-row justify-between">
        <Link
          to={"/"}
          className="sm:w-[40%] sm:h-[80px] md:w-[30%] md:h-[80px] lg:w-[19%] lg:h-[100px] px-5 flex flex-row gap-3 items-center bg-[#171717] text-[#F3EDCD] sm:text-2xl md:text-3xl lg:text-3xl hover:bg-[#efe598] hover:text-[#171717] cursor-pointer"
        >
          <h3>العودة إلى الصفحة الرئيسية</h3>
          <ChevronLeft />
        </Link>
        <a className='w-[30%] lg:md:sm:w-[18%] sm:mt-[5%] md:mt-[3%] lg:mt-[0%] flex justify-end z-1' href="/">
          <img className='w-full lg:mt-[10%] ml-[15%] sm:mt-[-5%]' src={AleppoLogo} alt="" />
        </a>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col px-5">
          <h1 className="text-[50px] sm:text-[60px] md:text-[90px] lg:text-[100px] mt-30 text-center">بعض الأماكن السياحيــــة في مدينة حلــــب</h1>
          <h3 className="text-start text-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px] ml-[10%]">قم بالضغط على اسم المكان لمعرفة المزيد عنه</h3>
        </div>
        <div className="flex flex-col gap-0">
          <h3 className="text-start sm:text-[25px] md:text-[30px] lg:text-[40px] mr-[3%]">الأقسام ضمن هذه الصفحة</h3>
          <div className="grid grid-cols-2 lg:md:sm:flex lg:md:sm:flex-row gap-2 sm:text-[20px] md:text-[25px] lg:text-[25px] md:mx-10 lg:mx-10 mt-5 justify-between">
            {titles.map((title, i) => (
              <button
                key={i}
                onClick={() => {
                  sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-[#171717] text-[#F3EDCD] p-2 hover:bg-[#efe598] hover:text-[#171717] cursor-pointer"
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {allPlaces.map((group, i) => (
        <div
          key={i}
          ref={(el) => sectionRefs.current[i] = el}
          id={`section-${i}`}
        >
          <HorizontalAccordion data={group} title={titles[i]} />
        </div>
      ))}
      <Footer />
    </div>
  );
};


export default TouristPlaces;
