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


export default function Home() {
  return (
   <div className="bg-[#f5f3f3]">
    
      
       <Banner/>
     
       <GetToKnowUs />
       <SolutionsScroll />
       <Services/>
       <Testimonials/>
       <ExpertTeam/>
       <ClientsSection/>
       <BlogSection/>
      
   </div>
  );
}
