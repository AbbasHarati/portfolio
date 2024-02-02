import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationalsSection from "./components/EducationalsSection";


export default function Home() {
  return (
    <>
      <div className="rtl items-center">
        <div className="font-vazir text-2xl">
          <p>من عباس هراتی هستم.</p>
          <p>اینجا هستم تا با همدیگه یاد بگیریم.</p>
        </div>
        <div className="">
          <AboutSection />
          <EducationalsSection />
          <ProjectsSection />
          
        </div>
      </div>
    </>
  );
}
