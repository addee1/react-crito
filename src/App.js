import './App.css';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase'
import CompanyLogos from './components/CompanyLogos/CompanyLogos'
import FeatureSection from './components/FeatureSection/FeatureSection';
import AboutSection from './components/AboutSection/AboutSection';
import ServiceSection from './components/ServiceSection/ServiceSection';
import WhyChooseUsSection from './components/WhyChooseUsSection/WhyChooseUsSection';
import ProjectAndCaseSection from './components/ProjectAndCaseSection/ProjectAndCaseSection';
import MeetOurTeamSection from './components/MeetOurTeamSection/MeetOurTeamSection';
import ArticleAndNewsSection from './components/ArticleAndNewsSection/ArticleAndNewsSection';
import GetNewsSection from './components/GetNewsSection/GetNewsSection';
import FooterSection from './components/FooterSection/FooterSection';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Showcase />
      <CompanyLogos />
      <FeatureSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <ProjectAndCaseSection />
      <MeetOurTeamSection />
      <ArticleAndNewsSection />
      <GetNewsSection />
      <FooterSection />
      
    </div>
  );
}

export default App;
