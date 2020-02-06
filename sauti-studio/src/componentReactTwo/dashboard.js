import React, { useState } from "react";
import Card from "./card";

const Dashboard = props => {
  const handleFlow = e => {
    props.history.push("/workflows");
  };

  return (
    <div>
      <header>
        <h1>Dasboard</h1>
      </header>
      <button>PROFILE</button>
      <button onClick={handleFlow}>CREATE A NEW WORKFLOW</button>
      <Card />
    </div>
  );
};

export default Dashboard;
