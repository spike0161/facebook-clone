import React from "react";
import "../css/Post.css";
import { Avatar } from "@material-ui/core";
import ThumbIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined} from "@material-ui/icons";


function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={profilePic} className="post-avatar" />
        <div className="post-topinfo">
          <h3>{username}</h3>
          <p>Timestamp...</p>
        </div>
      </div>
      <div className="post-bottom">
        <p>{message}</p>
      </div>
      <div className="post-image">
        <img src={image} alt="profilePic" />
      </div>
      <div className="post-options">
        <div className="post-option">
        <ThumbIcon />
        <p>Like</p>
        </div>
        <div className="post-option">
        <ThumbIcon />
        <p>Like</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
