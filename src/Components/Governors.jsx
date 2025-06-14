import { governorsData } from "../assets/Data/governorsData";
import GovernorTimeline from "./GovernorTimeline";


const governors = governorsData;


const Governors = () => {

  return (
    <section id='governors' className='md:h-[1450px] lg:h-[1300px] bg-[#777F53]'>
      <div>
        <GovernorTimeline data={governors} />
      </div>
    </section>
  );
};

export default Governors;
