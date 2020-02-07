import React from "react";

const Dashboard = props => {

  const handleFlow = e => {
    props.history.push("/workflows");
  };

  const handleLogOut = e => {
    props.history.push("/");
  };

  return (
    <div>
      <header>
        <h1>Dasboard</h1>
      </header>
      <button>PROFILE</button>
      <button onClick={handleFlow}>CREATE A NEW WORKFLOW</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Dashboard;
