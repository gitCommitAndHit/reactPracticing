import React from "react";

export const PostContent = ({image, title, text, link}) => {
  return (
      <div className="Post__content">
        <div className="Post__content__image"
             style={{backgroundImage: `url(${image})`}}
        />
        <div className="Post__content__text">
          <div><b>{title}</b></div>
          <div>{text}</div>
          <div className="Post__content__link">{link}</div>
        </div>
      </div>
  );
};