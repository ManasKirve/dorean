import React, { useState, useRef, useEffect } from "react";
import lectursection from "../jsonfiles/lectursection.json";

const LecturesSection = ({ searchQuery, filterType }) => {
  const [visibleLectures, setVisibleLectures] = useState(8);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const loadMoreRef = useRef(null);

  const lowerCaseSearchQuery = searchQuery.toLowerCase();

  // Sort the lectures by id initially
  const sortedLectures = lectursection.sort((a, b) => a.id - b.id);

  // Separate the trending and non-trending lectures
  const filteredLectures = sortedLectures.filter(
    (content) =>
      content.title.toLowerCase().includes(lowerCaseSearchQuery) &&
      (filterType === "" || content.typelecture === filterType)
  );

  // Sort filtered lectures to prioritize trending if there's a search query
  const displayedLectures = searchQuery
    ? filteredLectures.sort((a, b) => {
        if (a.trending === "yes" && b.trending !== "yes") {
          return -1;
        } else if (a.trending !== "yes" && b.trending === "yes") {
          return 1;
        }
        return 0;
      })
    : filteredLectures;

  const loadMore = () => {
    setButtonClicked(true);
    setVisibleLectures((prevVisibleLectures) => prevVisibleLectures + 8);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (buttonClicked && loadMoreRef.current) {
      loadMoreRef.current.scrollIntoView({ behavior: "smooth" });
      setButtonClicked(false);
    }
  }, [visibleLectures, buttonClicked]);

  return (
    <div>
      <div className="container">
        <div className="mb-4">
          <h1 className="main_head">Lectures</h1>
        </div>
        <div className="row">
          {displayedLectures.slice(0, visibleLectures).map((content, index) => (
            <div
              className={`col-md-3 ${windowWidth <= 1000 ? "col-md-6" : ""} mb-4 `}
              key={content.id}
              ref={index === visibleLectures - 8 ? loadMoreRef : null}
            >
              <div className="card card_weight_lectursection">
                <img
                  src={content.img}
                  className="card-img-top"
                  alt="Trending"
                />
                <div className="card-body">
                  <div className="d-flex align-items-center gap-2 mb-2 justify-content-between">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <img
                        src={content.channellogo}
                        className="image_logo_card"
                        alt="Channel Logo"
                      />
                      <p className="card-text font_size_chanlename">
                        {content.channelname}
                      </p>
                    </div>

                    {content.trending === "yes" && (
                      <div className="fire_trending">
                        <i className="fa-solid fa-fire"></i>
                      </div>
                    )}
                  </div>
                  <h5 className="card-title mb-2 font_size_titlename">
                    {content.title}
                  </h5>
                  <p className="card-text font_size_lectrename">
                    {content.lecturedescriptiong}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                  <div className={content.type_color}>
                      <div className="d-flex justify-content-between align-items-center gap-1">
                        <div className="text_icon_fontss">
                          {content.typelecture}
                        </div>
                      </div>
                    </div>
                    <a
                      href={content.linkss}
                      className="btn btn_color"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Now
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleLectures < displayedLectures.length && (
          <div className="white_back_discovermore mb-3">
            <div className="text-center">
              <button
                className="nav-linksss back_contusess btn_color_dicover"
                onClick={loadMore}
              >
                Discover More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LecturesSection;
