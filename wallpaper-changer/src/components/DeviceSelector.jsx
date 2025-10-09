import React, { useState, useRef, useEffect } from "react";
import "../styles/_deviceselector.scss";

function DeviceSelector({ device, setDevice, resolution, setResolution }) {
  const devices = [
    { name: "iPhone 12", resolution: "1170 x 2532" },
    { name: "iPhone 12 Pro Max", resolution: "1284 x 2778" },
    { name: "iPhone 14 Pro", resolution: "1179 x 2556" },
    { name: "iPhone 14 Pro Max", resolution: "1290 x 2796" },
    { name: "Galaxy S24", resolution: "1440 x 3088" },
    { name: "Galaxy S24 Ultra", resolution: "1440 x 3200" },
    { name: "Pixel 8", resolution: "1080 x 2400" },
    { name: "Pixel 8 Pro", resolution: "1440 x 3120" },
    { name: "iPad Pro", resolution: "2048 x 2732" },
    { name: "Desktop", resolution: "1920 x 1080" },
  ];

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (dev) => {
    setDevice(dev.name);
    setResolution(dev.resolution);
    setOpen(false);
  };

  return (
    <div className="device-selector" ref={dropdownRef}>
      <label>Choose your device:</label>
      <div
        className={`dropdown ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="selected">
          {device} ({resolution})
          <span className={`arrow ${open ? "rotate" : ""}`}>▼</span>
        </div>
        <ul className="options">
          {devices.map((dev) => (
            <li key={dev.name} onClick={() => handleSelect(dev)}>
              {dev.name} ({dev.resolution})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DeviceSelector;
