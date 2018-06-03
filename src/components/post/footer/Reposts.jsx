import React from "react";
import {Icon} from "react-materialize";
import "./Social.css"

export const Reposts = ({reposts,className}) => {
  return (
      <span className={`Repost ${className}`}>
      <Icon tiny>repeat</Icon>
        {reposts > 0 && <span className="Count">{reposts}</span>}
      </span>
  )
};