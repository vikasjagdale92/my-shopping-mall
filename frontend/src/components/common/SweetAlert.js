import React, { Component } from "react";
import swal from "sweetalert";

class SweetAlertPopUp extends Component {
  openModal = params => {
    const { title, text, icon, button } = params;
    swal({
      title: title,
      text: text,
      icon: icon,
      buttons: button
    });
  };
  render() {
    const params = this.props;

    return <div>{this.openModal(params)}</div>;
  }
}

SweetAlertPopUp.defaultProps = {
  title: "Congratulation!",
  text: "Data Added successfully",
  icon: "success",
  button: "OK"
};

export default SweetAlertPopUp;
