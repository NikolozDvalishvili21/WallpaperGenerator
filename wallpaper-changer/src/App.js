import React, { useState } from "react";
import Header from "./components/Header";
import DeviceSelector from "./components/DeviceSelector";
import SearchBar from "./components/SearchBar";
import WallpaperGrid from "./components/WallpaperGrid";

function App() {
  const [device, setDevice] = useState("iPhone 12");
  const [resolution, setResolution] = useState("1170 x 2532");
  const [topic, setTopic] = useState("");
  const [wallpapers, setWallpapers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const UNSPLASH_ACCESS_KEY = "IL4OGdxDOCGLoZrPin8jwAJUcWOw-wz5RVWKZOdpe2k"; 

  const [width, height] = resolution.split(" x ").map(Number);

  const fetchWallpapers = async (newTopic, newPage = 1) => {
    if (!newTopic) return;
    setLoading(true);
    try {
      const orientation = width > height ? "landscape" : "portrait";
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${newTopic}&orientation=${orientation}&page=${newPage}&per_page=10&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      const data = await res.json();

      if (newPage === 1) {
        setWallpapers(data.results);
      } else {
        setWallpapers((prev) => [...prev, ...data.results]);
      }
      setPage(newPage);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTopic) => {
    setTopic(searchTopic);
    fetchWallpapers(searchTopic, 1);
  };

  const handleShowMore = () => {
    fetchWallpapers(topic, page + 1);
  };

  return (
    <div>
      <Header />
      <DeviceSelector
        device={device}
        setDevice={setDevice}
        resolution={resolution}
        setResolution={setResolution}
      />
      <SearchBar topic={topic} setTopic={setTopic} onSearch={handleSearch} />
      <WallpaperGrid wallpapers={wallpapers} width={width} height={height} />
      {wallpapers.length > 0 && (
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <button
            onClick={handleShowMore}
            style={{
              padding: "0.75rem 2rem",
              borderRadius: "50px",
              border: "none",
              backgroundColor: "#ff6f61",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {loading ? "Loading..." : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
