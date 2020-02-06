import React, { useState } from "react";
import { connect } from "react-redux";
import { addFlow } from "../actions/index";

const AddForm = props => {
  const { addFlow, isAdded, flows } = props;

  const [value, setValue] = useState({
    description: "",
    location: "",
    idea: ""
  });

  const [flow, setFlow] = useState({});

  //handles change dynamically
  const handleChange = (name, e) => {
    setValue({ ...value, [name]: e.target.value });
  };

  //handles submit when a new flow is created
  const handleSubmit = e => {
    e.preventDefault();
    const newFlow = {
      description: value.description,
      location: value.location,
      idea: value.idea
    };
    addFlow(newFlow);
    setValue({ description: "", location: "", idea: "" });
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
            value={value.idea}
            onChange={e => handleChange(e.target.name, e)}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={value.description}
            onChange={e => handleChange(e.target.name, e)}
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={value.location}
            onChange={e => handleChange(e.target.name, e)}
          />
        </label>
        <input type="submit" value=" Add Flow" />
      </form>
      {isAdded ? <p> Added WorkFlow!</p>: ""}
    </div>
  );
};

const mapStateToProps = state => {
    return {
        isAdded: state.isAdded,
        flows: state.flows
    };
};

export default connect(mapStateToProps, { addFlow})(AddForm);