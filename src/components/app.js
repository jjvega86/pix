import React, {Component} from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSearchSubmit(term){
    console.log(term);
  }


  render() {
    const containerStyle = {
      marginTop: "10px",
    };
    return (
      <div className="ui container" style={containerStyle}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

