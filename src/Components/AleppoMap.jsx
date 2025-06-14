import Efrin from '../Components/AleppoMap/Efrin'
import Atarb from '../Components/AleppoMap/Atarb'
import Azzaz from '../Components/AleppoMap/Azzaz'
import Samaan from '../Components/AleppoMap/Samaan'
import Bab from '../Components/AleppoMap/Bab'
import DierHafer from '../Components/AleppoMap/DierHafer'
import Safira from '../Components/AleppoMap/Safira'
import Jarables from '../Components/AleppoMap/Jarables'
import Menbag from '../Components/AleppoMap/Menbag'
import EinArab from '../Components/AleppoMap/EinArab'

const AleppoMap = ({selectedRegion, setSelectedRegion}) => {

  return (
    <div className='mt-[-80%] sm:mt-[0%] md:mt-[0%] lg:mt-[0%]'>
      <Efrin setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
      <Atarb setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
      <Azzaz setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
      <Samaan setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
      <Bab setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
      <DierHafer setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
      <Safira setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
      <Jarables setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
      <Menbag setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
      <EinArab setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
    </div>
  );
};

export default AleppoMap;
