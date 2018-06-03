import React from "react";
import {Comments} from "./Comments";
import {Reposts} from "./Reposts";
import {Favourites} from "./Favourite";
import {SendTo} from "./SendTo";

export const PostFooter = ({comments, reposts, favourites}) => {
  return (
      <div className="Post__footer">
        <Comments className="Social__item" comments={comments}/>
        <Reposts className="Social__item" reposts={reposts}/>
        <Favourites className="Social__item" favourites={favourites}/>
        <SendTo className="Social__item" />
      </div>
  );
};