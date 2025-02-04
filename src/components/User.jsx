import { useEffect, useState } from "react";

const User = (props) => {
  const [count1] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
  //Api call
  }, []);


  return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count = {count1} (Function)</h1>
      <h1>Count = {count2} (Function)</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Contact: @ayushdeuja_01</h4>
    </div>
  );
};
export default User;
