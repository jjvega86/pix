import React from "react";
import SearchBar from "./SearchBar";

const App = (props) => {
  const containerStyle = {
    marginTop: "10px",
  };
  return (
    <div className="ui container" style={containerStyle}>
      <SearchBar />
    </div>
  );
};

export default App;
