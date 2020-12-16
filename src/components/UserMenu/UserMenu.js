import React from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/authOperations";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <img src={avatar} alt="avatar" width="50" />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
  avatar:
    "https://e7.pngegg.com/pngimages/544/445/png-clipart-marge-simpson-catwoman-batman-homer-simpson-bart-simpson-catwoman-fictional-characters-fictional-character.png",
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
