import React, { useState } from "react";
import { connect } from "react-redux";
import { addFlow, deleteFlow, updateFlow } from "../actions/index";
import Card from "./card";
import { Link } from "react-router-dom"
const AddForm = props => {
    const [idea, setIdea] = useState({
        idea: "",
        description: "",
        location: "",
        user_id: ""
    });

  //handles change dynamically
  const handleChange = (name, e) => {
    setIdea({ ...idea, [name]: e.target.value });
  };


  //handles submit when a new flow is created
  const handleSubmit = e => {
    e.preventDefault();
    console.log("flowsubmited")
    const newFlow = {
      description: idea.description,
      location: idea.location,
      idea: idea.idea,
      user_id: ''
    };
    props.addFlow(newFlow);
    setIdea({ description: "", location: "", idea: "", user_id: ""});
  };

    // function for USER_ID/NOTE to convert value to a number
    const handleUserIdChange = e => {
        setIdea({ ...idea, user_id: Number(e.target.value) });
      };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="idea">
          Idea:
          <input
            type="text"
            placeholder="Idea Name"
            name="idea"
            value={idea.idea}
            onChange={e => handleChange(e.target.name, e)}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={idea.description}
            onChange={e => handleChange(e.target.name, e)}
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={idea.location}
            onChange={e => handleChange(e.target.name, e)}
          />
        </label>
        <label>User_id
            <input 
                name="user_id"
                type="number"
                placeholder="Enter flow number"
                value={idea.user_id}
                onChange={e => handleUserIdChange}
            />
        </label>
        <button type="submit">Add Flow</button>
      </form>
      <Card /><br/>
      <button><Link to="/dashboard">Dashboard</Link></button>
    </div>
  )};

const mapStateToProps =  {
    addFlow,
    deleteFlow,
    updateFlow
};

export default connect(state => state, mapStateToProps)(AddForm);