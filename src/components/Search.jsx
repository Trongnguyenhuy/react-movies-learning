import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value); // Cập nhật giá trị vào state
    }
  };

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Search;
