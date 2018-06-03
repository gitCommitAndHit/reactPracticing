import React from "react";
import FontAwesome from "react-fontawesome";
import "./Social.css"

export const Comments = ({comments,className}) => {
  return (
      <span className={`Comment ${className}`}>
        <FontAwesome name="comment-o"/>
        {comments > 0 && <span className="Count">{comments}</span>}
      </span>
  );
}