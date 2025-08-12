import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSpring, animated } from "react-spring";
import manas from "../srcassets/WhatsApp Image 2024-07-26 at 12.27.28 PM.jpeg";

const AboutWorks = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY >= 1500) {
        setStartAnimation(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function Number({ n, className, hasPlus }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: startAnimation ? n : 0,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div className={className}>
        {number.to((n) => `${n.toFixed(0)}${hasPlus ? "+" : ""}`)}
      </animated.div>
    );
  }

  return (
    <div ref={sectionRef}>
      <div className="background">
        <div className="container">
          <div className="mx-auto">
            <h3
              className="text-center pt-3 font_titke_achievment"
              data-aos="fade-left"
            >
              Our Proffestionals
            </h3>
            <hr className="font_below_iconsss" data-aos="fade-right" />
          </div>
          <div className="row">
            <div className="col-md-3 text-center py-4 d-flex flex-column gap-1">
              <div className="circual_background d-flex justify-content-center align-items-center">
                <i class="fa-brands fa-react font_size_achievmenticon"></i>
              </div>

              <div className="font_below_icon_proffesionals color_blue_one">
                React Dev
              </div>

              <div className="geern_var font_wiegth_below_icon_proffion">
                Experienced React Developers with more then 2 years in the field
              </div>
            </div>

            <div className="col-md-3 text-center py-4 d-flex flex-column gap-1">
              <div className="circual_background d-flex justify-content-center align-items-center">
                <i class="fa-brands fa-figma font_size_achievmenticon"></i>
              </div>

              <div className="font_below_icon_proffesionals color_blue_one">
                {" "}
                Designers
              </div>

              <div className="geern_var font_wiegth_below_icon_proffion">
                Skilled UI/UX Designers with 6 years of experience
              </div>
            </div>

            <div className="col-md-3 text-center py-4 d-flex flex-column gap-1">
              <div className="circual_background d-flex justify-content-center align-items-center">
                <i class="fa-brands fa-node font_size_achievmenticon"></i>
              </div>

              <div className="font_below_icon_proffesionals color_blue_one">
                Node.js Dev
              </div>

              <div className="geern_var font_wiegth_below_icon_proffion">
                Proficient Node.js Developers with 3 years of experience
              </div>
            </div>


            <div className="col-md-3 text-center py-4 d-flex flex-column gap-1">
              <div className="circual_background d-flex justify-content-center align-items-center">
                <i class=" fa-solid fa-server font_size_achievmenticon"></i>
              </div>

              <div className="font_below_icon_proffesionals color_blue_one">
              DevOps Engineers
              </div>

              <div className="geern_var font_wiegth_below_icon_proffion">
              DevOps Engineer with expertise in CI/CD pipelines
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWorks;
