import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSpring, animated } from "react-spring";

const AboutUsAchievMents = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY >= 750) {
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
        {number.to((n) => `${n.toFixed(0)}${hasPlus ? '+' : ''}`)}
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
              Our Achievements
            </h3>
            <hr className="font_below_iconsss" data-aos="fade-right" />
          </div>
          <div className="row">
            <div className="col-md-3 text-center py-4 d-flex flex-column gap-1">
              <div className="circual_background d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-chalkboard font_size_achievmenticon"></i>
              </div>
              <Number className="font_below_icon color_blue_one" n={1000} hasPlus={true} />
              <div className="geern_var font_wiegth_below_icon">Lectures</div>
            </div>
            <div className="col-md-3 text-center py-4 d-flex flex-column gap-1">
              <div className="circual_background d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-user font_size_achievmenticon"></i>
              </div>
              <Number className="font_below_icon color_blue_one" n={14} hasPlus={false} />
              <div className="geern_var font_wiegth_below_icon">Specialist</div>
            </div>
            <div className="col-md-3 text-center py-4 d-flex flex-column gap-1">
              <div className="circual_background d-flex justify-content-center align-items-center">
                <i className="fa-solid  fa-school font_size_achievmenticon"></i>
              </div>
              <Number className="font_below_icon color_blue_one" n={700} hasPlus={true} />
              <div className="geern_var font_wiegth_below_icon">
                Free Lectures
              </div>
            </div>
            <div className="col-md-3 text-center py-4 d-flex flex-column gap-1">
              <div className="circual_background d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-trophy font_size_achievmenticon"></i>
              </div>
              <Number className="font_below_icon color_blue_one" n={5000} hasPlus={false} />
              <div className="geern_var font_wiegth_below_icon">
                Success Stories
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsAchievMents;
