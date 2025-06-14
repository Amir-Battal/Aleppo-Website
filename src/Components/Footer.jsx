import { useLocation } from "react-router-dom";
import FacebookIcon from "../assets/Icons/FacebookIcon";
import TelegramIcon from "../assets/Icons/TelegramIcon";

const Footer = () => {
  const { pathname } = useLocation();

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const isHome = pathname === '/';
  const isTourist = pathname === '/tourist-places';

  return (
    <footer className='w-full sm:h-[450px] md:h-[300px] lg:h-[300px] bg-[#777F53] text-[#F3EDCD] flex flex-col px-20 pt-5'>
      <div className='w-full flex sm:flex-col md:flex-row lg:flex-row justify-between'>
        <div className="sm:w-full md:w-[80%] lg:w-[50%]">
          <h3 className="text-[30px]">أقسام الموقع</h3>
          <div className="w-full flex flex-row sm:gap-5 md:gap-0 lg:gap-0 justify-between">
            <div className="sm:w-[50%] flex flex-col gap-2">
              <h3 className="text-[25px]">الصفحة الرئيسية</h3>
              <ul className="text-[18px]">
                <li>
                  {isHome ? (
                    <a href="#regions" onClick={(e) => handleSmoothScroll(e, 'regions')} className="hover:text-[#d5d0b4]">التقسيمات الإدارية</a>
                  ) : (
                    <a href="/#regions" className="hover:text-[#d5d0b4]">التقسيمات الإدارية</a>
                  )}
                </li>
                <li>
                  {isHome ? (
                    <a href="#aleppoInLines" onClick={(e) => handleSmoothScroll(e, 'aleppoInLines')} className="hover:text-[#d5d0b4]">حلب في سطور</a>
                  ) : (
                    <a href="/#aleppoInLines" className="hover:text-[#d5d0b4]">حلب في سطور</a>
                  )}
                </li>
                <li>
                  {isHome ? (
                    <a href="#touristPlaces" onClick={(e) => handleSmoothScroll(e, 'touristPlaces')} className="hover:text-[#d5d0b4]">بعض الأماكن السياحية في حلب</a>
                  ) : (
                    <a href="/#touristPlaces" className="hover:text-[#d5d0b4]">بعض الأماكن السياحية في حلب</a>
                  )}
                </li>
                <li>
                  {isHome ? (
                    <a href="#governors" onClick={(e) => handleSmoothScroll(e, 'governors')} className="hover:text-[#d5d0b4]">التسلسل الزمني للمحافظين</a>
                  ) : (
                    <a href="/#governors" className="hover:text-[#d5d0b4]">التسلسل الزمني للمحافظين</a>
                  )}
                </li>
                <li>
                  {isHome ? (
                    <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-[#d5d0b4]">تواصل معنا</a>
                  ) : (
                    <a href="/#contact" className="hover:text-[#d5d0b4]">تواصل معنا</a>
                  )}
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[25px]">صفحة الأماكن السياحية</h3>
              <div className="flex flex-row justify-between gap-10">
                <ul className="flex flex-col text-[18px]">
                  <li>
                    {isTourist ? (
                      <a href="#section-0" onClick={(e) => handleSmoothScroll(e, 'section-0')} className="hover:text-[#d5d0b4]">القــــــلاع والخانــــــات</a>
                    ) : (
                      <a href="/tourist-places#section-0" className="hover:text-[#d5d0b4]">القــــــلاع والخانــــــات</a>
                    )}
                  </li>
                  <li>
                    {isTourist ? (
                      <a href="#section-1" onClick={(e) => handleSmoothScroll(e, 'section-1')} className="hover:text-[#d5d0b4]">المــــدارس و دُور الثقافــــة</a>
                    ) : (
                      <a href="/tourist-places#section-1" className="hover:text-[#d5d0b4]">المــــدارس و دُور الثقافــــة</a>
                    )}
                  </li>
                  <li>
                    {isTourist ? (
                      <a href="#section-2" onClick={(e) => handleSmoothScroll(e, 'section-2')} className="hover:text-[#d5d0b4]">الاســــواق والحمامــــات وأماكن ثقافيــــة وترفيهيــــة</a>
                    ) : (
                      <a href="/tourist-places#section-2" className="hover:text-[#d5d0b4]">الاســــواق والحمامــــات وأماكن ثقافيــــة وترفيهيــــة</a>
                    )}
                  </li>
                  <li>
                    {isTourist ? (
                      <a href="#section-3" onClick={(e) => handleSmoothScroll(e, 'section-3')} className="hover:text-[#d5d0b4]">بعض أبــــواب مدينة حلــــب القديمــــة</a>
                    ) : (
                      <a href="/tourist-places#section-3" className="hover:text-[#d5d0b4]">بعض أبــــواب مدينة حلــــب القديمــــة</a>
                    )}
                  </li>
                </ul>
                <ul className="flex flex-col text-[18px]">
                  <li>
                    {isTourist ? (
                      <a href="#section-4" onClick={(e) => handleSmoothScroll(e, 'section-4')} className="hover:text-[#d5d0b4]">بعض الأماكن الدينيــــة الجزء الأول</a>
                    ) : (
                      <a href="/tourist-places#section-4" className="hover:text-[#d5d0b4]">بعض الأماكن الدينيــــة الجزء الأول</a>
                    )}
                  </li>
                  <li>
                    {isTourist ? (
                      <a href="#section-5" onClick={(e) => handleSmoothScroll(e, 'section-5')} className="hover:text-[#d5d0b4]">بعض الأماكن الدينيــــة الجزء الثاني</a>
                    ) : (
                      <a href="/tourist-places#section-5" className="hover:text-[#d5d0b4]">بعض الأماكن الدينيــــة الجزء الثاني</a>
                    )}
                  </li>
                  <li>
                    {isTourist ? (
                      <a href="#section-6" onClick={(e) => handleSmoothScroll(e, 'section-6')} className="hover:text-[#d5d0b4]">الفنــــادق والمطاعــــم</a>
                    ) : (
                      <a href="/tourist-places#section-6" className="hover:text-[#d5d0b4]">الفنــــادق والمطاعــــم</a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-[20%] lg:w-[50%] flex sm:flex-col md:flex-col lg:flex-col gap-5 md:pr-[5%] lg:pr-[20%]">
          <h3 className="sm:w-[30%] text-[30px]">تواجدنا الرقمي</h3>
          <div className="sm:w-[50%] flex flex-row gap-5">
            <a className="sm:w-[20%] md:w-[40%] lg:w-[15%]" target="_blank" href="https://t.me/AleppoGov1">
              <TelegramIcon />
            </a>
            <a className="sm:w-[20%] md:w-[40%] lg:w-[15%]" target="_blank" href="https://www.facebook.com/AleppoGov1">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <h3 className="text-[25px]">جميع الحقوق محفوظة @ <a target="_blank" href="https://amirbattal.com/" style={{ fontFamily: 'Jomhuria'}} className="text-[32px] hover:text-[#d5d0b4]">أمير بطال</a></h3>
      </div>
    </footer>
  );
};

export default Footer;
