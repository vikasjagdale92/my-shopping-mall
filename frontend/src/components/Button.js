import React, { Component } from "react";

class Button extends Component {
  render() {
    const { btnType, text, BTClass, margin } = this.props;
    return (
      <div>
        <button
          type={btnType}
          className={`btn btn-${BTClass}`}
          style={{ margin: margin }}
        >
          {text}
          {this.props.children}
        </button>
      </div>
    );
  }
}

// Set default props
Button.defaultProps = {
  btnType: "submit",
  text: "Submit",
  BTClass: "primary col-lg form-control",
  margin: "0px 0px 0px 0px"
};

export default Button;
