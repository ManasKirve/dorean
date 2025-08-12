import React from 'react';

const SelectionIcons = ({ onFilterChange, activeButton }) => {
  const handleButtonClick = (filterType) => {
    if (filterType === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onFilterChange(filterType);
  };

  // Add a console log to check if the component is being rendered
  console.log("SelectionIcons rendered");

  return (
    <div>
      <section className="container-fluid">
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <button
              className={`back_icones d-flex justify-content-center align-items-center gap-1 ${activeButton === '' ? 'activesss' : ''}`}
              onClick={() => handleButtonClick('')}
            >
              <span className={`material-symbols-outlined icone_sixe_backgroun  iconfill ${activeButton === '' ? 'activetext' : ''}`}>home</span>
              <div className={`text_icon_font ${activeButton === '' ? 'activetext' : ''}`}>Home</div>
            </button>
            <button
              className={`back_icones d-flex justify-content-center align-items-center gap-1 ${activeButton === 'Free' ? 'activesss' : ''}`}
              onClick={() => handleButtonClick('Free')}
            >
              <span className={`material-symbols-outlined icone_sixe_backgroun  ${activeButton === 'Free' ? 'activetext' : ''}`}>money_off</span>
              <div className={`text_icon_font ${activeButton === 'Free' ? 'activetext' : ''}`}>Free</div>
            </button>
            <button
              className={`back_icones d-flex justify-content-center align-items-center ${activeButton === 'Paid' ? 'activesss' : ''}`}
              onClick={() => handleButtonClick('Paid')}
            >
              <span className={`material-symbols-outlined icone_sixe_backgroun ${activeButton === 'Paid' ? 'activetext' : ''}`}>attach_money</span>
              <div className={`text_icon_font ${activeButton === 'Paid' ? 'activetext' : ''}`}>Paid</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectionIcons;
