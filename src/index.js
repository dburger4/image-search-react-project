import React from "react";
import ReactDom from "react-dom";
import unsplashInstance from "./unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] }

  retrieveSearchTerm = async (searchTerm) => {
    const response = await unsplashInstance.get("/search/photos", {
      params: { query: searchTerm }
    });

    this.setState({images: response.data.results})
  }

  render() {
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmitCallback={this.retrieveSearchTerm}/>
        <ImageList imagesArray={this.state.images}/>
      </div>
    )
  };
};

ReactDom.render(<App />, document.querySelector("#root"));
