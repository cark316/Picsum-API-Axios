import React from "react";
import ImagesFetch from "./components/ImagesFetch";

const App = () => {
  return (
    <div className="flex flex-wrap gap-1">
      <ImagesFetch />
    </div>
  );
};

export default App;

// style={{ height: "calc(100vh - 16px)", width: "calc(100vw - 32px" }}