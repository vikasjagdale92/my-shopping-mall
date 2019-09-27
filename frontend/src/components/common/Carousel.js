import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators carousel-indicators-ul">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item carousel-item-msm active">
            <img
              src="/images/product.jpg"
              alt="Los Angeles"
              width="100%"
              height="400"
            />
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>
          </div>
          <div className="carousel-item carousel-item-msm">
            <img
              src="/images/product2.jpg"
              alt="Chicago"
              width="100%"
              height="400"
            />
            <div className="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
          <div className="carousel-item carousel-item-msm">
            <img
              src="/images/product.jpg"
              alt="New York"
              width="100%"
              height="400"
            />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}

export default Carousel;
