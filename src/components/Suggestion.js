import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const languages = ['react','Sets','java','Biomolecules', 'mysql', 'html','Equilibrium', 'node', 'Gravitation','python','Matrices', 'Angular', 'Solutions','php', 'bootstrap', 'Statistics','(C)','Oscillations'];

const Suggestion = ({ setSearchQuery }) => {
  const handleButtonClick = (language) => {
    setSearchQuery(language);
  };

  return (
    <div className='container'>
      <div className='d-flex'>
      <Swiper
        spaceBetween={10} // Adjust this value as needed
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
            slidesOffsetBefore: -25,
          },
          770: {
            slidesPerView: 10.2,
            slidesOffsetBefore: -50,
          }
        }}
      >
        {languages.map((language, index) => (
          <SwiperSlide key={index}>
            <button
              className='react_button_suggest'
              onClick={() => handleButtonClick(language)}
            >
              {language}
            </button>
            
          </SwiperSlide>
          
        ))}

      </Swiper>
      <div></div>
      </div>
   
    </div>
  );
};

export default Suggestion;
