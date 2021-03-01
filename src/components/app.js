import React, { Component } from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar/SearchBar";
import ImageList from './ImageList/ImageList';

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
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
