import Image from "next/image";
import FirstPage from "@/components/FirstPage";
import FloatingNav from '@/components/ui/FloatingNav'
import { FaHome} from 'react-icons/fa'
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data/gridItems";
import { Experience } from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems }/>

        <FirstPage />

        <Grid />

        <RecentProjects/>
        <Experience />
        <Approach />
        <Footer />
        
        
        
      </div>
    </main>
  );
}
