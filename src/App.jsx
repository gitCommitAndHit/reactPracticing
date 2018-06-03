import React from "react";
import './App.css';
import {Post} from "./components/post/index";
import {Icon} from "react-materialize";

class App extends React.Component {
  data = [
    {
      profileImage: <Icon medium>account_circle</Icon>,
      groupName: "The Practical Dev",
      groupNameTag: "@ThePracticalDev",
      createDate: "Sep 10",
      title: "Learning React? Start Small.",
      image: "https://reactjs.org/logo-og.png",
      text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
      link: "dev.to",
      comments: 5,
      reposts: 47,
      favourites: 190
    },
    {
      profileImage: <Icon medium>account_circle</Icon>,
      groupName: "The Practical Dev",
      groupNameTag: "@ThePracticalDev",
      createDate: "Sep 10",
      title: "Learning React? Start Small.",
      image: "https://tproger.ru/wp-content/uploads/2016/10/reactmini.png",
      text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
      link: "dev.to",
      comments: 5,
      reposts: 47,
      favourites: 190
    },
    {
      profileImage: <Icon medium>account_circle</Icon>,
      groupName: "The Practical Dev",
      groupNameTag: "@ThePracticalDev",
      createDate: "Sep 10",
      title: "Learning React? Start Small.",
      image: "https://reactjs.org/logo-og.png",
      text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
      link: "dev.to",
      comments: 5,
      reposts: 47,
      favourites: 190
    }
  ];

  render() {
    return (
        <div className="container">
          {this.data.map(item=>{
            return <Post data={item}/>
          })}

        </div>
    )
  }

}

export default App;
