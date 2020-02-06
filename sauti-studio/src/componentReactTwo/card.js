import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
    const { flow, deleteFlow} = props;
    console.log("Flow description:", props)

    return (
        <div>
            <h2>{props.idea}</h2>
            <p>Description: {props.description}</p>
            <p>Location: {props.location}</p>
            <button><Link to={`/edit-flow/${props.id}`}>Edit</Link></button>
            <button onClick={() => deleteFlow(flow.id)}>Delete</button>
        </div>
    );
};

export default Card;