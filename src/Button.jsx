import React from "react";

const MyButton = props => (
  <button onClick={props.fire ? () => props.fire() : () => {}}>
    {props.label ? props.label : "GENERIC LABEL"}{" "}
    {props.otherProp ? props.otherProp : "something else"}
  </button>
);

export default MyButton;
