import React, { useState } from "react";
import Header from "./components/Header";
import DeviceSelector from "./components/DeviceSelector";

function App() {
  const [device, setDevice] = useState("iPhone 12");
  const [resolution, setResolution] = useState("1170 x 2532");

  return (
    <div>
      <Header />
      <DeviceSelector
        device={device}
        setDevice={setDevice}
        resolution={resolution}
        setResolution={setResolution}
      />
    </div>
  );
}

export default App;
