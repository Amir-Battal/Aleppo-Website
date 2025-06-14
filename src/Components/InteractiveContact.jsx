import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AleppoIllustration from '../assets/Illustrations/Aleppo Citadel Illustration/Aleppo Citadel Illustration.svg'


const InteractiveContact = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const messageRefs = useRef([]);
  const iconContainerRef = useRef([]);
  

  useGSAP(() => {
    if (step > 0) {
      gsap.fromTo(
        messageRefs.current[step - 1],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [step]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      message,
    };

    // Example using emailjs or your backend endpoint
    console.log('Sending:', payload);
  };

  return (
    <section className="relative h-[800px] bg-[#F3EDCD] pt-20 text-[#171717] flex flex-col sm:items-center md:items-start lg:items-start justify-start px-4 z-10 overflow-hidden">

      {/* المحتوى التفاعلي */}
      <h1 className="text-[60px] lg:md:sm:text-[120px] font-bold mb-10 z-10">تواصــــل معنــــا</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6 z-10">
        {step === 0 && (
          <div ref={(el) => (messageRefs.current[0] = el)}>
            <label className="block mb-2 text-[30px]">ما هو اسمك؟</label>
            <div className='flex flex-col gap-2'>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // onBlur={() => name && setStep(1)}
                className="w-full p-3 bg-[#cfcbb0] border-b-2 border-[#777F53] text-black"
              />
              {(step !== 1) && (
                <button
                  type="button"
                  onClick={() => name && setStep(1)}
                  className="bg-[#777F53] text-[#F3F1F3] text-[20px] hover:bg-[#697049] transition p-3 cursor-pointer"
                >
                  تأكيد
                </button>
              )}
            </div>
          </div>
        )}

        {step >= 1 && (
          <div ref={(el) => (messageRefs.current[1] = el)}>
            <p className="text-[30px] mb-3">أهلاً {name}، هل يمكنك كتابة البريد الإلكتروني أو رقم الهاتف؟</p>
            <div className='flex flex-col gap-2'>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onBlur={() => email && setStep(2)}
                className="w-full p-3 bg-[#cfcbb0] border-b-2 border-[#777F53] text-black"
              />
              {(step !== 2) && (
                <button
                  type="button"
                  onClick={() => email && setStep(2)}
                  className="bg-[#777F53] text-[#F3F1F3] text-[20px] hover:bg-[#697049] transition p-3 cursor-pointer"
                >
                  تأكيد
                </button>
              )}
            </div>
          </div>
        )}

        {step >= 2 && (
          <div ref={(el) => (messageRefs.current[2] = el)}>
            <p className="text-[30px] mb-3">تفضل، ما هو طلبك؟</p>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 bg-[#cfcbb0] border-b-2 border-[#777F53] text-black z-5"
            />
          </div>
        )}

        {step >= 2 && (
          <button
            type="submit"
            className="bg-[#777F53] text-[#F3F1F3] w-full text-[20px] hover:bg-[#697049] transition p-3 cursor-pointer z-99"
          >
            إرسال
          </button>
        )}
      </form>

      {/* الصورة التوضيحية */}
      <div className='w-full flex justify-center z-0 absolute'>
        <img className='lg:md:sm:w-[60%] w-[100%] mt-[80%] ml-[8%] sm:mt-[50%] md:mt-[30%] lg:mt-[-5%] lg:md:sm:ml-[-40%] absolute z-0' src={AleppoIllustration} alt="" />
      </div>
    </section>
  );

};

export default InteractiveContact;