import React from "react";
import "../styles/_wallpapercard.scss";

function WallpaperCard({ wallpaper, width, height }) {
  // Unsplash download URL (safe, counts towards API download stats)
  const downloadUrl = `${wallpaper.links.download}?force=true&w=${width}&h=${height}`;

  return (
    <div className="wallpaper-card">
      <img
        src={`${wallpaper.urls.raw}&w=${width}&h=${height}&fit=crop`}
        alt={wallpaper.alt_description || "Wallpaper"}
      />
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn"
      >
        Download
      </a>
    </div>
  );
}

export default WallpaperCard;
