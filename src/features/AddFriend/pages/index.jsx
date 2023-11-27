import React from "react";
import PropTypes from "prop-types";
import AddFriendList from "../components/AddFriendList";
import "./style.css";
function AddFriendFeature(props) {
  const profileList = [
    {
      profile_email: "abc",
      profile_picture_url:
        "https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/383738511_277609585193268_8327264815219488184_n.jpg?stp=dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8BCboyxUbwUAX_Shbkk&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB4FwYlpqb67-lTNptaZuzlvoTrV6dyCqA-0pBXO41ugQ&oe=656768BB",
      profile_name: "Nguyen Van A",
      mutual_friends_list: [1, 2, 3],
    },
    {
      profile_email: "acb",
      profile_picture_url:
        "https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/403877089_1749713405500606_1097862250976800653_n.jpg?stp=dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3-W5AxlN8oEAX-_26R2&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfDjwthJJ55pV3vCYK1ePDrPvGtyy5tDqTVgqEKjpFcBhw&oe=6566D605https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/403877089_1749713405500606_1097862250976800653_n.jpg?stp=dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3-W5AxlN8oEAX-_26R2&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfDjwthJJ55pV3vCYK1ePDrPvGtyy5tDqTVgqEKjpFcBhw&oe=6566D605",
      profile_name: "Nguyen Van B",
      mutual_friends_list: [1, 2, 3],
    },
    {
      profile_email: "bac",
      profile_picture_url:
        "https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/387166717_1594366764426195_13047691528519503_n.jpg?stp=dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ffQmD9-xFtAAX_g2cIC&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAyuPeyfpkj3cm7SVusLA9-qmn4384mU-P4e3eG6kC5TQ&oe=6565FC7E",
      profile_name: "Nguyen Van C",
      mutual_friends_list: [1, 2, 3],
    },
    {
      profile_email: "bca",
      profile_picture_url:
        "https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/284710842_3398158497137007_6005381646043322040_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0sniLdQMAmcAX8o0yVP&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAoXMk1Zo13XyQ5m9zDHVA4mrgcT28eWHq9WlL2fx5HWg&oe=6567411E",
      profile_name: "Nguyen Van D",
      mutual_friends_list: [1, 2, 3],
    },
  ];
  return <AddFriendList profileList={profileList}></AddFriendList>;
}

AddFriendFeature.propTypes = {};

export default AddFriendFeature;
