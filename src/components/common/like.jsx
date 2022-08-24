import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

class likeButton extends Component {
  render() {
    return (
      <>
        <FontAwesomeIcon
          onClick={this.props.onLike}
          icon={this.formantIcon()}
          style={{ cursor: "pointer" }}
        />
      </>
    );
  }
  formantIcon() {
    return this.props.liked ? faHeartSolid : faHeart;
  }
}

export default likeButton;
