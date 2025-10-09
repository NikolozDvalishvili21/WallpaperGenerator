import React from "react";
import WallpaperCard from "./WallpaperCard";
import "../styles/_wallpapergrid.scss";

function WallpaperGrid({ wallpapers, width, height }) {
  return (
    <div className="wallpaper-grid">
      {wallpapers.map((wp) => (
        <WallpaperCard
          key={wp.id}
          wallpaper={wp}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
}

export default WallpaperGrid;
