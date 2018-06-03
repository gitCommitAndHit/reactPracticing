import React from "react";
import {Icon} from "react-materialize";
import "./Social.css"

export const Favourites = ({favourites,className}) => {
  return (
      <span className={`Favourite ${className}`}>
        <Icon tiny>favorite</Icon>
        {favourites > 0 && <span className="Count">{favourites}</span>}
      </span>
  )
};