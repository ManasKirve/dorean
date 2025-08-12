import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import trending from "../jsonfiles/trending.json"; // adjust the path as necessary
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = ({ searchQuery, filterType }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(searchQuery === '');
  }, [searchQuery]);

  if (!isVisible) return null;

  const filteredTrending = trending.filter(content => {
    if (filterType === 'Free') {
      return content.typelecture === 'Free';
    } else if (filterType === 'Paid') {
      return content.typelecture === 'Paid';
    }
    return true;
  });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container">
      <div className="mb-4 mt-4">
        <h1 className="main_head">Trending🔥</h1>
      </div>
      <Slider {...settings}>
        {filteredTrending.map((content) => (
          <div className="p-2 d-flex " key={content.id}>
            <div className="card card_weight">
              <img src={content.img} className="card-img-top" alt="Trending" />
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
                      <i className="fa-solid fa-fire "></i>
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
      </Slider>
    </div>
  );
};

export default Trending;
