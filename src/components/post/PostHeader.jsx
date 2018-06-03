import React from "react"

export const PostHeader = ({title, groupName, groupNameTag, createDate}) => {
  return (
      <div className="Post__header">
        <div>
          <b>{groupName}</b>
          <span className="Post__header__meta">{groupNameTag} &#183; {createDate}</span>
        </div>
        <div>{title}</div>
        <div>{`{author:${"@dceddia"}}`}</div>
      </div>
  )
};