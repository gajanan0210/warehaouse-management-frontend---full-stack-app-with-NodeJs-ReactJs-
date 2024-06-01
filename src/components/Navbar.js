// frontend/src/components/Navbar.js

import React, { Component } from "react";
import LogoutModal from '../modals/LogoutModal';

class Navbar extends Component {
  state = {
    showModal: false
  };

  handleProfileClick = () => {
    this.setState({ showModal: true });
  };

  handleCancel = () => {
    this.setState({ showModal: false });
  };

  handleConfirm = () => {
    this.setState({ showModal: false });
    // Implement logout functionality here
    console.log("Logged out");
    // Clear user info from local storage and redirect to login
    localStorage.removeItem('userInfo');
    window.location.href = '/';
  };

  render() {
    return (
      <div style={{ height: 70, background: "#662671", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <div style={{ fontSize: 30, color: "#fff", fontWeight: 600, fontFamily: '"Montserrat", sans-serif', textTransform: "uppercase", marginLeft: 20 }}>DigiFlake</div>
        <div style={{ position: "relative", cursor: "pointer" }} onClick={this.handleProfileClick}>
          <img
            style={{ height: 48, marginRight: 20 }}
            src="https://res.cloudinary.com/dzurqbpi6/image/upload/profile-user_rbng6f.png"
            alt="profile-icon"
          />
        </div>
        <LogoutModal
          show={this.state.showModal}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    );
  }
}

export default Navbar;
