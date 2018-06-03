import React from "react";
import {Icon} from "react-materialize";

import "./index.css"
import {PostHeader} from "./PostHeader";
import {PostContent} from "./PostContent";
import {PostFooter} from "./footer/PostFooter";

export class Post extends React.Component {

  render() {
    const {profileImage, groupName, groupNameTag, createDate, title, image, text, link, comments, reposts, favourites} = this.props.data;
    return (
        <div className="PostWrapper">
          {profileImage}
          {/*<PostContent/>*/}
          <div className="Post">
            <Icon className="Post__expand__icon" small>expand_more</Icon>
            <PostHeader
                title={title}
                groupName={groupName}
                groupNameTag={groupNameTag}
                createDate={createDate}
            />
            <PostContent
                image={image}
                title={title}
                text={text}
                link={link}
            />
            <PostFooter
                comments={comments}
                reposts={reposts}
                favourites={favourites}
            />
          </div>
        </div>
    )
  }
}