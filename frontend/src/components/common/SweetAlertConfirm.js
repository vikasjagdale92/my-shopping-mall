import React, { Component } from "react";
import swal from "sweetalert";

class SweetAlertConfirm extends Component {
  openConformModal = params => {
    const { title, text, icon, buttons, dangerMode } = params;
    swal({
      title: title,
      text: text,
      icon: icon,
      buttons: buttons,
      dangerMode: dangerMode
    }).then(willDelete => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success"
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  render() {
    const params = this.props;

    return <div>{this.openConformModal(params)}</div>;
  }
}

SweetAlertConfirm.defaultProps = {
  title: "Congratulation!",
  text: "Data Added successfully",
  icon: "success",
  buttons: true,
  dangerMode: true
};

export default SweetAlertConfirm;
