import Image from "next/image";
import GetToKnowUs from './components/GetToKnowUs';
import Solutions from './components/solutions';
import Services from './components/services';
import Testimonials from './components/testimonials';
import ExpertTeam from './components/hometeam';
import ClientsSection from './components/clints';
import BlogSection from './components/blog';
import Banner from "./components/Banner";
import SolutionsScroll from "./components/Solutionsweprovide";
import SolutionsWeProvideMobile from "./components/Solutionsweprovidemobile";
import AnnouncementPopup from './components/AnnouncementPopup';

export default function Home() {
  return (
   <div className="bg-[#f5f3f3]">
    
      
       <Banner/>
     
       <GetToKnowUs />
       <div className="hidden lg:block">
         <SolutionsScroll />
       </div>
       <div className="block lg:hidden">
         <SolutionsWeProvideMobile />
       </div>
       <Services/>
       <Testimonials/>
       <ExpertTeam/>
       <ClientsSection/>
       <BlogSection/>
      
       <AnnouncementPopup />
   </div>
  );
}
