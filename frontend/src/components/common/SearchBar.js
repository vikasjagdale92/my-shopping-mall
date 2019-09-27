import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="col-lg" style={{ margin: "10px 0px" }}>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <button className="btn btn-warning" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
