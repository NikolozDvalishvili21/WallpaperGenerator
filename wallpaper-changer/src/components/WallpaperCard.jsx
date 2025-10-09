import React from "react";
import "../styles/_wallpapercard.scss";

function WallpaperCard({ wallpaper, width, height }) {
  return (
    <div className="wallpaper-card">
      <img
        src={`${wallpaper.urls.raw}&w=${width}&h=${height}&fit=crop`}
        alt={wallpaper.alt_description || "Wallpaper"}
      />
    </div>
  );
}

export default WallpaperCard;
