import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFlow } from "../actions";
import Card from "./card";
import AddForm from "./workFlowForm";

const WorkFlowList = props => {
    const {flows, fetchFlow, isFetching, isAdded} = props;
    //Fetch flows data on load.
    useEffect(() => {
        props.fetchFlow();
    }, []);

    // const flow = flows.find(flow => flow.user_id === Number(props.match.params.user_id));

    // //wait dor data to load before moving forward.
    // if(!flows.length || !flows) {
    //     return <h2>Loading..</h2>
    // }
    return (
        <div>
            <h1>WorkFlow: </h1>
            <AddForm />
            {isFetching && <p>Getting flows...</p>}
            {!isFetching &&
                !isAdded &&
                flows.map(flow => <Card key={flows} flow={flow} />)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        flows: state.flows,
        isFetching: state.isFetching,
        isAdded: state.isAdded
    };
};

export default connect(mapStateToProps, { fetchFlow })(WorkFlowList);
