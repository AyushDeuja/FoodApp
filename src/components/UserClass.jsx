import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 1,
    };
    console.log("Child constructor")
  }

  componentDidMount(){
    console.log("Child component did mount")
  }

  render() {
    console.log("Child render")
    const { name, location } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count = {count1} (Class)</h1>
        <h1>Count = {count2} (Class)</h1>
        <button
          onClick={() => {
            this.setState({
              count1: count1 + 1,
              count2: count2 + 1
            });
          }}
        >
          Increase Count
        </button>
        <button
          onClick={() => {
            this.setState({
              count1: count1 - 1,
              count2: count2 - 1
            });
          }} style={{marginLeft: "10px"}}
        >
          Decrease Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ayushdeuja_01</h4>
      </div>
    );
  }
}
export default UserClass;
