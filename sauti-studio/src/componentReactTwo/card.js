import React from "react";

const Card = props => {
  const { flow, deleteFlow } = props;
  console.log("Flow description:", props);

  return (
    <div>
      <div>
        <h1>Workflow Card</h1>
        <h2>Idea: {props.idea}</h2>
        <p>Description: {props.description}</p>
        <p>Location: {props.location}</p>
        <p>User_Id: {props.user_id}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Card;