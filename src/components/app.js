import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID U6y-Dx3sRMszOS2xBlMrpTmWaQ-CB5BFm2ER0imiLKg",
      },
    });
    this.setState({ images: response.data.results });
  }

  render() {
    const containerStyle = {
      marginTop: "10px",
    };
    return (
      <div className="ui container" style={containerStyle}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
