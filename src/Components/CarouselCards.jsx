import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { touristPlaceData } from '../assets/Data/touristPlacesData';



const NUM_CARDS = 9;
const ROTATE_STEP = 1; // درجة الدوران لكل تحديث
const ROTATE_INTERVAL = 50; // مللي ثانية بين كل تحديث للدوران
const PAUSE_DURATION = 4000; // 5 ثواني توقف عند كل بطاقة
const DEGREE_PER_CARD = 40; // كما في كودك، الفرق بين البطاقات


const touristPlace = touristPlaceData;

const CarouselCards = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(null);
  const autoRotateRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    startAutoRotate();
    return () => {
      stopAutoRotate();
      clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const startAutoRotate = () => {
    if (autoRotateRef.current === null && !isPausedRef.current) {
      autoRotateRef.current = window.setInterval(() => {
        setRotation((prev) => {
          const nextRotation = prev + ROTATE_STEP;
          const diff = nextRotation % DEGREE_PER_CARD;

          // إذا كنا على وشك التوقف عند بطاقة جديدة
          if (diff < ROTATE_STEP) {
            stopAutoRotate();
            isPausedRef.current = true;
            pauseTimeoutRef.current = setTimeout(() => {
              isPausedRef.current = false;
              startAutoRotate();
            }, PAUSE_DURATION);

            // توقف تمامًا عند زاوية البطاقة
            return Math.round(nextRotation / DEGREE_PER_CARD) * DEGREE_PER_CARD;
          }

          return nextRotation;
        });
      }, ROTATE_INTERVAL);
    }
  };


  const stopAutoRotate = () => {
    if (autoRotateRef.current !== null) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    stopAutoRotate();
    clearTimeout(pauseTimeoutRef.current);
    isPausedRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || startX.current === null) return;
    const deltaX = e.clientX - startX.current;
    setRotation((prev) => prev + deltaX * 0.3);
    startX.current = e.clientX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startX.current = null;
    startAutoRotate();
  };

  return (
    <StyledWrapper>
      <div
        className="card-3d w-[100%] h-[300px]"
        style={{ transform: `perspective(1000px) rotateY(${rotation}deg)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {touristPlace.map((place, index) => {
          const cardAngle = index * DEGREE_PER_CARD;
          const normalizedRotation = rotation % 360;
          const currentAngle = (cardAngle - normalizedRotation + 360) % 360;
          const isActive = currentAngle < DEGREE_PER_CARD / 2 || currentAngle > 360 - DEGREE_PER_CARD / 2;

          return (
            <div
              key={place.id}
              className={`tourist-card w-[150px] h-[150px] lg:md:sm:w-[250px] lg:md:sm:h-[250px] ${isActive ? 'active' : ''}`}
              style={{
                transform: `translate(-50%, -50%) rotateY(${cardAngle}deg) translateZ(500px)`,
                backgroundImage: `url(${place.image})`,
              }}
            >
              <div className="overlay">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          );
        })}

      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .card-3d {
    position: relative;
    margin: 0 auto;
    margin-top: 200px;
    transform-style: preserve-3d;
    transition: transform 0.2s linear;
    cursor: grab;
    user-select: none;
  }

  .card-3d:active {
    cursor: grabbing;
  }

  .tourist-card {
    position: absolute;
    top: 50%;
    left: 50%;
    background-size: cover;
    background-position: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    color: white;
  }

  .tourist-card .overlay {
    background: rgba(0, 0, 0, 0.6);
    padding: 12px;
    width: 100%;
    font-size: 14px;
  }

  .tourist-card h3 {
    margin: 0 0 6px 0;
    font-size: 18px;
    font-weight: bold;
  }

  .tourist-card p {
    margin: 0;
    line-height: 1.3;
  }
`;


export default CarouselCards;
