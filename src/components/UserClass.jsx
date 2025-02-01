import js from "@eslint/js";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "DummyName",
        location: "Default",
        avatar_url: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
      },
    };
   console.log(this.props.name + "Child constructor")
  }

 async componentDidMount(){
    console.log(this.props.name + "Child component did mount")

   const data =await fetch("https://api.github.com/users/AyushDeuja");
   const json = await data.json();

   this.setState({
    userInfo: json,
   });
   console.log(json);
  };

  componentDidUpdate(){
    console.log("Component did update")
  }

  componentWillUnmount(){
    console.log("Component will unmount")
  }

  render() {
    console.log(this.props.name + "Child render")
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Image" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ayushdeuja_01</h4>
      </div>
    );
  }
}
export default UserClass;
