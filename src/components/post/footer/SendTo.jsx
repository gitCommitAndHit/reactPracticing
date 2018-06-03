import React from "react";
import {Icon} from "react-materialize";
import "./Social.css"

export const SendTo = ({className}) => {
  return (
      <span className={`${className}`}>
        <Icon tiny className="MailTo">mail_outline</Icon>
      </span>
  )
}