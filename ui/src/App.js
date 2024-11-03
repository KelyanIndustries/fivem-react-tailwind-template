import React, { useState } from "react";
import Nui from "./utilities/Nui";
import "./index.css";

function App() {
  const [hidden, setHidden] = useState(true);
  const closePage = () => {
    setHidden(true);
    Nui.send("close", {});
  };

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePage();
    }
  });

  window.addEventListener("message", function (event) {
    const eventData = event.data;

    if (eventData.type === "SHOW_PAGE") {
      setHidden(false);
    } else if (eventData.type === "CLOSE_PAGE") {
      closePage();
    }
  });

  return (
    <div id="app" hidden={hidden}>
      <a>FiveM React boilerplate with Lua</a>
      <a>itsqpr</a>
      <a>Version 1.0.2</a>
      <a>Use ESC to close</a>
    </div>
  );
}

export default App;