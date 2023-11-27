import React from "react";
import PropTypes from "prop-types";
import "./style.css";
function ProfileCard(props) {
  const { profile } = props;
  return (
    <>
      <div className="card">
        <img
          src={profile.profile_picture_url}
          alt=""
          className="profile_picture"
        />
        <div className="card_detail">
          <h4 className="profile_name">{profile.profile_name}</h4>
          <p className="mutual_friends">
            {profile.mutual_friends_list.length} bạn chung
          </p>
          <button className="add_friend">Thêm bạn bè</button>
          <button className="delete">Xóa, gỡ bỏ</button>
        </div>
      </div>
    </>
  );
}

ProfileCard.propTypes = {};

export default ProfileCard;
