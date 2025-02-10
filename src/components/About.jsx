import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
import { use } from "react";
import { data } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }
  componentDidMount() {
    //console.log("Parent component did mount")
    //API CALL is done here in class based react
  }
  render() {
    // console.log("Parent Render");
    return (
      <div className="about-container">
        <h1>This is about page....</h1>
        <div>
          
          <UserContext.Consumer>{({loggedInUser}) => <h1 className="text-lg font-bold">LoggedIn User: {loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"Ayush Deuja(Class Component)"}
          location={"Nepal(Class)"}
          />
      </div>
    );
  }
}

export default About;
