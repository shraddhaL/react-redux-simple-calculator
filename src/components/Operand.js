import React from 'react';
import { addInput } from "../redux/actions/calculator";
import { evaluate } from "../redux/actions/calculator";
import { connect } from "react-redux";

const Operand = (props) => {

    const handleClick = () => props.addInput(props.value.toString()); // put the number into array
        
    const handleEvaluation = () => props.evaluate()

    if (props.value !== '=') {
        return (<button onClick={handleClick}>
            {props.value}
        </button>
        );
    } else {
        return (<button onClick={handleEvaluation}>
            {props.value}
        </button>
        );
    }
}

export default connect(null, { addInput,evaluate })(Operand)