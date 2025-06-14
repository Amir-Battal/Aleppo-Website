import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";


const WelcomLetter = () => {

  // رسالة الترحيب
  const textWelcomeRef = useRef(null)

  useGSAP(() => {

    let splitWelcome = new SplitText(textWelcomeRef.current, { 
      type: 'words' 
    });

    gsap.from(splitWelcome.words, {
      scrollTrigger: {
        trigger: textWelcomeRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: 'power4.out',
    });
  }, [])

  return (
    <section className="min-h-screen flex justify-center pt-20 text-center px-4 sm:px-10 md:px-20">
      <div className="flex flex-col items-center gap-10 max-w-6xl">
        {/* عنوان الترحيب */}
        <h1
          ref={textWelcomeRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug"
        >
          أهلاً بكم في موقع محافظة حلــــــب ... العاصمة الاقتصادية لســــوريا.
        </h1>

        {/* فقرة التعريف */}
        <div
          style={{ fontFamily: 'Readex-Pro' }}
          className="flex flex-col gap-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center"
          ref={textWelcomeRef}
        >
          <p>
            تعمل كوادر محافظة حلــــــب وإدارتها وكافة مسؤوليها بجد وبروح التعاون كي تتبوأ محافظة حلــــــب مركز
            الريادة في سورية في تقديم الخدمات للمواطنين.
          </p>
          <p>
            محافظة حلــــــب الآن أحوج ماتكون إلى كل ســـوري وحـــلبـــي.. بإنتمائه وإخلاصه.. حبه وعطائه.. عمله
            وإنجازه لتقود محافظتنا عجلة الاقتصاد السوري من جديد كما كانت سابقاً.
          </p>
          <p>
            لقد أعطت سورية وحلــــــب بالذات لكل السوريين الكثير وحان الوقت الذى يترجم فيه الحلبيون السوريون المخلصون
            حبهم لــــحلــــب ولســــوريا.
          </p>
          <p>
            إنه الآن نداءنا لكل المواطنين للعمل معنا لنكلل نجاحنا سوية بالنماء والرخاء لكل الســــوريين حاضرهم
            ومستقبلهم.
          </p>
          <p>
            نحن هنا لخدمتكم فلا تترددوا بإيصال أصواتكم إلينا للوصول بمحافظتنا إلى العلياء متألقة دائماً كما كان تاريخها
            وكما سيعود مستقبلها.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomLetter;
