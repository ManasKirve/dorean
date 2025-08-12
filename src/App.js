import React, { useState, useEffect } from "react";
import "./App.css";
import LecturesSection from "./components/LecturesSection";
import Navbar from "./components/Navbar";
import ScreachSection from "./components/ScreachSection";
import SelectionIcons from "./components/SelectionIcons";
import Trending from "./components/Trending";
import Suggestion from "./components/Suggestion";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query) {
      setFilterType("Free");
    } else if (filterType === "Free") {
      setFilterType("");
    }
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
    if (type === "") {
      setSearchQuery("");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <div className="backgroundimage height_width text-white">
        <Navbar
          onSearchChange={handleSearchChange}
          onFilterChange={handleFilterChange}
          activeButton={filterType}
        />

        <ScreachSection
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        <div className="margin_bottom_icons" data-aos="zoom-in">
          <SelectionIcons
            onFilterChange={handleFilterChange}
            activeButton={filterType}
          />
        </div>
      </div>

      <div className="container-fluid px-5">
        <div className="margin_btoom_trending">
          <div className="suggestion_margin">
            <Suggestion setSearchQuery={setSearchQuery} />
          </div>
          <Trending searchQuery={searchQuery} filterType={filterType} />
        </div>

        <LecturesSection searchQuery={searchQuery} filterType={filterType} />
      </div>
    </>
  );
}

export default App;
