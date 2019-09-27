import React, { Component } from "react";
import { instance } from "../../instance";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productArr: []
    };
  }
  componentDidMount() {
    instance
      .post("/api/products/productList")
      .then(res => {
        this.setState({
          productArr: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { productArr } = this.state;
    return (
      <div style={{ marginTop: "20px" }} className="col-lg-8 offset-lg-2">
        <table className="table table-striped">
          <thead>
            <tr style={{ background: "#007bff", color: "#fff" }}>
              <th>Product Name</th>
              <th>Description</th>
              <th>Prize</th>
              <th>Action</th>
            </tr>
          </thead>
          {productArr.length > 0 ? (
            <tbody>
              {productArr.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.productName}</td>
                    <td>{product.productShortDescription}</td>
                    <td>{product.productPrize}</td>
                    <td>
                      <button className="btn btn-primary btn-sm">Edit</button>{" "}
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <th colSpan="5" style={{ textAlign: "center", color: "red" }}>
                  {" "}
                  Nothing to display{" "}
                </th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    );
  }
}

export default ProductList;
