import { useState, useRef } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { aleppoInLinesData } from '../assets/Data/aleppoInLinesData';

const flipCardData = aleppoInLinesData;

const CombinedCard = ({...props}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const [carouselIndex, setCarouselIndex] = useState(0);

  const cardFrontRef = useRef(null);

  const cardData = flipCardData.find((item) => item.id === props.id);

  const handleMouseMove = (e) => {
    const card = cardFrontRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleClick = () => {
    setIsFlipped(prev => !prev);
    setCarouselIndex(0);
  };

  // Carousel navigation handlers
  const prevImage = (e) => {
    e.stopPropagation();
    setCarouselIndex((prev) =>
      prev === 0 ? (cardData.images?.length || 1) - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCarouselIndex((prev) =>
      prev === (cardData.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  return (
    <StyledWrapper>
      <div className="flip-card w-[240%] h-[400px] sm:w-[160%] sm:h-[400px] md:w-[170%] md:h-[520px] lg:w-full lg:h-[520px]" onClick={handleClick}>
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          <div
            className="flip-card-front"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={cardFrontRef}
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            }}
          >
            <div className="corner top-left" />
            <div className="corner bottom-left" />
            <div className="corner top-right" />
            <div className="corner bottom-right" />
            <div className="card-content flex flex-col items-center">
              <img className='h-[400px] object-cover lg:md:sm:object-contain lg:md:sm:h-auto' src={props.image} alt="" />
              <h1 className="text-4xl mt-[110%]  lg:md:sm:mt-[100%] sm:text-4xl md:text-5xl lg:text-5xl text-center absolute text-[#171717] z-4">{cardData?.title || 'لا يوجد عنوان'}</h1>
            </div>
          </div>
          <div className="flip-card-back flex flex-col gap-5 pt-5">
            <p className="text-[#F3EDCD] text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center">{cardData?.title || 'لا يوجد عنوان'}</p>
            <div className="w-full h-[4px] bg-[#F3EDCD]" />
            <div className={`text-[14px] text-[#F3EDCD] sm:text-[13px] md:text-[15px] lg:text-[16px] font-medium ${cardData.id === 4 ? 'text-center text-[#F3EDCD]' : cardData.id === 5 ? 'text-start' : 'text-center text-[#F3EDCD]' } px-5`} style={{ fontFamily: 'Readex-Pro' }}>
              {Array.isArray(cardData?.content) ? (
                cardData.content.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))
              ) : (
                <p className={`${cardData.id === 4 ? 'comingSoon font-bold text-[40px] text-[#F3EDCD] sm:text-[120px]/20 md:text-[150px]/25 lg:text-[170px]/30 mt-15' : 'text-[#F3EDCD]'}`}>
                  {cardData?.content || 'لا يوجد محتوى'}
                </p>
              )}
            </div>
            {cardData.author && <p className="text-[#F3EDCD] sm:text-2xl md:text-3xl lg:text-3xl text-center">"{cardData?.author}"</p>}
            { (cardData.images) && (window.innerWidth >= 768) && (
              <div dir='ltr' className="carousel h-[170px] flex justify-center mt-5">
                <button className="nav-btn left bg-[#F3EDCD] cursor-pointer hover:bg-[#dad5b8]" onClick={prevImage} aria-label="السابق">
                  <ChevronLeft />
                </button>
                <img
                  className="carousel-image w-[80%] h-auto object-cover"
                  src={cardData.images[carouselIndex]}
                  alt={`صورة طبق ${carouselIndex + 1}`}
                />
                <button className="nav-btn right bg-[#F3EDCD] cursor-pointer hover:bg-[#dad5b8]" onClick={nextImage} aria-label="التالي">
                  <ChevronRight />
                </button>
              </div>
            )}
        </div>
        </div>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .comingSoon {
    font-family: 'AlSharkTitle-Bold';
  }

  .flip-card {
    perspective: 1000px;
    margin: 50px auto;
    cursor: pointer;
  }
    

  .flip-card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card-inner.flipped {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-shadow: 0 8px 14px rgba(0,0,0,0.2);
    display: flex;
    transition: transform 0.2s ease;
    transform-style: preserve-3d;
  }

  .corner {
    position: absolute;
    width: 60px;
    height: 60px;
    background: #777F53;
    z-index: 10;
  }

  .top-left {
    top: 0;
    left: 0;
    border-radius: 0 0 100% 0;
  }

  .bottom-left {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 0;
  }

  .top-right {
    top: 0;
    right: 0;
    border-radius: 0 0 0 100%;
  }

  .bottom-right {
    bottom: 0;
    right: 0;
    border-radius: 100% 0 0 0;
  }


  .flip-card-front {
    background: #777F53;
    color: white;
  }

  .flip-card-back {
    background: #886128;
    transform: rotateY(180deg);
  }

  .card-content {
    text-align: center;
    padding: 1rem;
  }

  #prompt {
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
    margin-bottom: 12px;
  }

`;


export default CombinedCard;
