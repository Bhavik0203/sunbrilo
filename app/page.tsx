import Image from "next/image";
import Header from "./components/Header";
import GetToKnowUs from './components/GetToKnowUs';
import Solutions from './components/solutions';
import Services from './components/services';
import Testimonials from './components/testimonials';
import ExpertTeam from './components/hometeam';
import ClientsSection from './components/clints';
import BlogSection from './components/blog';
import Footer from './components/footer';
import Banner from "./components/Banner";
import Servicesone from "./components/solutionone";
import SolutionsScroll from "./components/Solutionsweprovide";


export default function Home() {
  return (
   <div className="bg-[#f5f3f3]">
    <Header />
      
       <Banner/>
     
       <GetToKnowUs />
       <SolutionsScroll />
       <Services/>
       <Testimonials/>
       <ExpertTeam/>
       <ClientsSection/>
       <BlogSection/>
       <Footer />
   </div>
  );
}
