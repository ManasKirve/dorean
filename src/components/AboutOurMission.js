import React from "react";
import studyingImg from "../srcassets/transparent_background.png";
import studyingimages from "../srcassets/Online_learning_Customizable_Isometric_Illustrations___Amico_Style-removebg-preview.png";

const AboutOurMission = () => {
  return (
    <div>
      <div className="aboutus-Outmissoni-section">
        <div className="container">
          <div className="row  ">
            <div className="col-md-6">
              <h2 className="text-center  text_size_main mb-4">Our Mission</h2>

              <div className="content background_blue_sectionss p-4  mb-2">
                <div className="d-flex gap-2 text-start">
                  <i class="fa-solid fa-graduation-cap font_near_the_icon pt-1 "></i>

                  <div className="d-flex flex-column">
                    <div className="font_near_the_icon">Course Offerings</div>
                    <div>
                      We offer both free and paid courses, often with
                      certificates, to ensure efficient learning.
                
                    </div>
                  </div>
                </div>
              </div>

              <div className="content background_blue_sectionss p-4  mb-2">
                <div className="d-flex gap-2 text-start">
                  <i class="fa-solid fa-lightbulb font_near_the_icon pt-1"></i>

                  <div className="d-flex flex-column">
                    <div className="font_near_the_icon">Empowering Youth</div>
                    <div>
                      Our mission is to empower youth by providing quality
                      knowledge through top-tier video lectures.
                    </div>
                  </div>
                </div>
              </div>

              <div className="content background_blue_sectionss p-4 mb-2">
                <div className="d-flex gap-2 text-start ">
                  <i class="fa-solid fa-clock font_near_the_icon pt-1"></i>

                  <div className="d-flex flex-column">
                    <div className="font_near_the_icon ">
                      Resource Efficiency
                    </div>
                    <div>
                      Our goal is to minimize time spent searching for
                      resources, ensuring a streamlined and effective learning
                      experience.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center  pt-4">
              <img src={studyingimages} alt="Studying" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurMission;
