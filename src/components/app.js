import React, { Component } from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    const containerStyle = {
      marginTop: "10px",
    };
    return (
      <div className="ui container" style={containerStyle}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
