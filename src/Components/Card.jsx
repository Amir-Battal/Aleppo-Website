import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CardPattern from './CardPattern';
import { regionsData } from '../assets/Data/regionsData';





const regions = regionsData;

const Card = ({ region }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const imageRef = useRef(null);

  useEffect(() => {
  if (!region) return;

  // Step 1: إخفاء المحتوى الحالي وقلب البطاقة للخلف
  setShowContent(false);
  setIsFlipped(false);

  // Step 2: بعد تأخير بسيط (زمن قلب البطاقة), اعرض المحتوى الجديد واقلبها للأمام
  const flipTimeout = setTimeout(() => {
    setIsFlipped(true);
    const contentTimeout = setTimeout(() => {
      setShowContent(true);
    }, 250); // وقت ظهور المحتوى بعد القلب للأمام

    return () => clearTimeout(contentTimeout);
  }, 500); // وقت القلب للخلف

  return () => clearTimeout(flipTimeout);
}, [region]);


  useGSAP(() => {
    if (region && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { rotation: 0 },
        { rotation: 180, duration: 2, ease: 'power2.inOut' }
      );
    }
  }, [region]);


  const matchedRegionData = regions.find(r => r.region === region);

  return (
    <StyledWrapper>
      <div className={`card w-[100%] h-[900px] lg:md:sm:h-[820px] ${isFlipped ? 'flipped' : ''}`}>
        <div className="content flex w-full ">
          {matchedRegionData && showContent ? (
            <div className='w-full flex flex-col gap-1'>
              <img className='w-full h-[30%] object-cover' src={`${matchedRegionData.image}`} alt={region} />
              <div className='flex flex-col'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl'>{matchedRegionData.title}</h1>
                <p className='text-base md:text-lg lg:text-xl'>{matchedRegionData.location}</p>
              </div>

              <div style={{ fontFamily: 'Readex-Pro' }} className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                  <p className='text-[12px] md:text-[13px] lg:text-[13px] leading-6 font-semibold text-center'>
                    {matchedRegionData.featured}
                  </p>
                  <p className='text-[12px] md:text-[13px] lg:text-[13px] leading-6 font-semibold text-center'>
                    {matchedRegionData.famous}
                  </p>
                </div>

                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-1'>
                    <h3 className='text-center text-xl md:text-2xl'>المناطق الأثرية:</h3>
                    <p className='text-[12px] md:text-[13px] lg:text-[13px] leading-[18px] font-semibold text-center'>
                      {matchedRegionData.archaeologicalSites}
                    </p>
                  </div>

                  <div className='w-full justify-evenly flex flex-row'>
                    <div className='flex flex-col w-[20%]'>
                      <h3 className='text-center text-xl md:text-2xl'>المدن :</h3>
                      <p className='text-[10px] md:text-[11px] lg:text-[10.5px] leading-6 text-center'>
                        {matchedRegionData.managerUnits.cities.join(' - ')}
                      </p>
                    </div>

                    <div className='w-[1px] h-[150px] bg-black flex'></div>

                    <div className='flex flex-col w-[38%]'>
                      <h3 className='text-center text-xl md:text-2xl'>البلدات :</h3>
                      <p className='text-[10px] md:text-[11px] lg:text-[10.5px] leading-6 text-center'>
                        {matchedRegionData.managerUnits.towns.join(' - ')}
                      </p>
                    </div>

                    <div className='w-[1px] h-[150px] bg-black'></div>

                    <div className='flex flex-col w-[20%]'>
                      <h3 className='text-center text-xl md:text-2xl'>البلديات :</h3>
                      <p className='text-[10px] md:text-[11px] lg:text-[10.5px] leading-6 text-center'>
                        {matchedRegionData.managerUnits.municipalities.join(' - ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='w-full flex justify-center items-center'>
              <CardPattern imageRef={imageRef} />
            </div>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    direction: rtl;
    position: relative;
    background: #886128;
    display: flex;
    font-size: 25px;
    font-weight: bold;
    margin-top: 50px;
    overflow: hidden;
    padding: 10px;
  }


  .content {
    z-index: 2;
    text-align: center;
  }

  .card::before,
  .card::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 0%;
    background-color: #F3EDCD;
    transition: all 1s;
    z-index: 1;
  }

  .card::before {
    top: 0;
    left: 0;
  }

  .card::after {
    bottom: 0;
    right: 0;
  }

  .flipped::before,
  .flipped::after {
    width: 100%;
    height: 100%;
  }
`;

export default Card;
