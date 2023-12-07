import React from "react";
import './Button.css';

export default props => {

    let classes = 'button ';
    classes += props.operation ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';

    console.log(classes);
    return (
        <button className={classes}>
            
            {props.label}

        </button>

    )

}
