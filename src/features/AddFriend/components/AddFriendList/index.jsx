import React from "react";
import PropTypes from "prop-types";
import ProfileCard from "../ProfileCard";
import "./style.css";
function AddFriendList(props) {
  const { profileList } = props;
  return (
    <ul>
      {profileList.map((profile) => (
        <li key={profile.email}>
          <ProfileCard profile={profile}></ProfileCard>
        </li>
      ))}
    </ul>
  );
}

AddFriendList.propTypes = {};

export default AddFriendList;
