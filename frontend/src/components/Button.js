import React, { Component } from "react";

class Button extends Component {
  render() {
    const { btnType, text, BTClass } = this.props;
    return (
      <div>
        <button type={btnType} className={`btn btn-${BTClass}  `}>
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
  BTClass: "primary col-lg form-control"
};

export default Button;
