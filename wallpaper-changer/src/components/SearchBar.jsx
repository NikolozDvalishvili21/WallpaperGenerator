import React, { useState } from "react";
import "../styles/_searchbar.scss";

function SearchBar({ topic, setTopic, onSearch }) {
  const [input, setInput] = useState(topic || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTopic(input.trim());
    if (onSearch) onSearch(input.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search wallpapers..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
