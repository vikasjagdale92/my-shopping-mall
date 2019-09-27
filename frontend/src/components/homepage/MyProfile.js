import React, { Component } from "react";
import Button from "../Button";

class MyProfile extends Component {
  render() {
    return (
      <div>
        <div
          className="col-lg-4 offset-lg-4 col-md-4 offset-md-4"
          style={{ padding: "0px" }}
        >
          <div className="profile-background-wrap"></div>
          <div className="profile-photo-wrap">
            <img src="/images/profile.jpg" alt="" />
            <h5>Mr. Vikas Jagdale</h5>
            <label>( {this.props.designation})</label>
          </div>
          <div className="col-lg">
            <div className="Profile-fields">
              <label>Mobile No: </label> {this.props.mobileNum}
            </div>
            <div className="Profile-fields">
              <label>Email Id: </label> {this.props.emailId}
            </div>
            <div className="Profile-fields">
              <label>Date Of Birth: </label> {this.props.DOB}
            </div>
            <div className="Profile-fields">
              <label>Designation: </label> {this.props.designation}
            </div>
            <div className="Profile-fields">
              <label>Gender: </label> {this.props.gender}
            </div>
            <div className="Profile-fields">
              <label>Address: </label> {this.props.address}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              text="Edit Profile"
              text="Do you want to Edit"
              margin="50px 0px 0px 0px"
              BTClass="warning "
            />
          </div>
        </div>
      </div>
    );
  }
}

MyProfile.defaultProps = {
  mobileNum: "8888433075",
  emailId: "vikasjagdale92@gmail.com",
  DOB: "25th April 1992",
  gender: "Male",
  designation: "Software Engineer",
  address: "At-Post: Somatane, Tal-Maval, Dist-Pune 410506"
};

export default MyProfile;
