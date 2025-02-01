import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }
  componentDidMount(){
    //console.log("Parent component did mount")
    //API CALL is done here in class based react

  }
  render() {
   // console.log("Parent Render");
    return (
      <div className="about-container">
        <h1>This is about page....</h1>
        {/* <User
          name={"Ayush Deuja(Functional Component)"}
          location={"Biratnagar(Function)"}
        /> */}

        <UserClass
          name={"Ayush Deuja(Class Component)"}
          location={"Nepal(Class)"}
        />
      
      </div>
    );
  }
}

export default About;
