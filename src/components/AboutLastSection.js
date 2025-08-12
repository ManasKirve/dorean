import React from "react";
import growthimage from "../srcassets/In_progress_Customizable_Cartoon_Illustrations___Bro_Style-removebg-preview.png";
const AboutLastSection = () => {
  return (
    <div>
      <div>
        <div className="aboutus-Outmissoni-section">
          <div className="container">
            <div className="row  ">
              <div className="col-md-6 text-center  pt-4">
                <img
                  src={growthimage}
                  alt="Studying"
                  className="img_width_aboutsus"
                />
              </div>
              <div className="col-md-6">
                <h2 className="text-center  text_size_main mb-4">
                  Our Benefits
                </h2>

                <div className="content background_blue_sectionss p-4  mb-2">
                  <div className="d-flex gap-2 text-start">
                    <i class="fa-solid fa-users font_near_the_icon pt-1 "></i>

                    <div className="d-flex flex-column">
                      <div className="font_near_the_icon">Community Support</div>
                      <div>
                      Become part of a community that offers support and opportunities for growth.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content background_blue_sectionss p-4  mb-2">
                  <div className="d-flex gap-2 text-start">
                    <i class="fa-solid fa-certificate font_near_the_icon pt-1"></i>

                    <div className="d-flex flex-column">
                      <div className="font_near_the_icon"> Certifications</div>
                      <div>
                        Receive recognized certifications that can advance your
                        career opportunities.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content background_blue_sectionss p-4 mb-2">
                  <div className="d-flex gap-2 text-start ">
                    <i class="fa-solid fa-handshake font_near_the_icon pt-1"></i>

                    <div className="d-flex flex-column">
                      <div className="font_near_the_icon ">
                      Affiliate Programs
                      </div>
                      <div>
                      We offer an affiliate program for you to earn by promoting our courses. Contact us to learn more.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLastSection;
