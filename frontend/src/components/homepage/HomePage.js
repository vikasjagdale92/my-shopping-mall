import React, { Component } from "react";

import Carousel from "../common/Carousel";
import SearchBar from "../common/SearchBar";
import ShowProducts from "../forms/ShowProducts";

class HomePage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Carousel />
        <ShowProducts />
      </div>
    );
  }
}

export default HomePage;
