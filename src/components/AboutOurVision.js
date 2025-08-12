import React from "react";
import studyingImg from "../srcassets/transparent_background.png";

const AboutOurVision = () => {
  return (
    <div>
      <div className="aboutus-Outmissoni-section">
        <div className="container">
          <div className="text-center our_vision_big_text mb-5">Our Vision</div>
          <div className="row ">
            <div className="col-md-4 text-center pt-3 mt-2">
              <div>
                <i class="fa-solid fa-book font_awson_vision "></i>
                <div className="font_awson_vision_titlt d-flex gap-2 justify-content-center align-items-center mb-4">
                  <div>Lecture </div>
                  <div className="font_color_green">Library</div>
                </div>
                <hr></hr>
                <div className="">
                  Our vision is to host over 10,000 high-quality lectures on our
                  website, covering a wide range of subjects and disciplines for
                  an extensive learning experience.
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center pt-3 mt-2">
              <div>
                <i class="fa-solid fa-user-plus font_awson_vision "></i>
                <div className="font_awson_vision_titlt d-flex gap-2 justify-content-center align-items-center mb-4">
                  <div> Content</div>
                  <div className="font_color_green"> Partnerships </div>
                </div>
                <hr></hr>
                <div className="">
                  Our vision is to collaborate with emerging YouTubers and
                  educators, featuring their content on our platform to offer
                  users fresh and diverse learning resources.
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center pt-3 mt-2">
              <div>
                <i class="fa-solid fa-route font_awson_vision "></i>
                <div className="font_awson_vision_titlt d-flex gap-2 justify-content-center align-items-center mb-4">
                  <div>Learning </div>
                  <div className="font_color_green">Paths</div>
                </div>
                <hr></hr>
                <div className="">
                  Our vision is to provide carefully curated learning paths,
                  where each course is structured to deliver the most efficient
                  and effective educational experience for users.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurVision;
