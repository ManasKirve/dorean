import React, { useEffect } from 'react';
import AboutNavbar from '../components/AboutNavbar';
import AboutusSection from '../components/AboutusSection';
import AboutOurMission from '../components/AboutOurMission';
import AboutUsAchievMents from '../components/AboutUsAchievMents';
import AboutOurVision from '../components/AboutOurVision';
import AboutWorks from '../components/AboutWorks';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import AboutLastSection from '../components/AboutLastSection';

const Abouts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    AOS.init({ duration: 1000 });

    // Cleanup AOS on component unmount
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="gap_between">
      <div className="background_bluess margin_bottom_sectoin">
        <div data-aos="fade-right">
          <AboutNavbar />
        </div>
        <div className="pt-4" data-aos="fade-left">
          <AboutusSection />
        </div>
      </div>
      <div className="margin_bottom_aboutourmission" data-aos="zoom-in">
        <AboutOurMission />
      </div>
      <div className="margin_top_work backgroun_grey_one">
        <AboutUsAchievMents />
      </div>
      <div className="margin_bottom_aboutourmissionsecond" data-aos="zoom-in">
        <AboutOurVision />
      </div>
      <div className="margin_top_work backgroun_grey_one">
        <AboutWorks />
      </div>
      <div>
        <AboutLastSection />
      </div>
      <Footer />
    </div>
  );
};

export default Abouts;
