import React from "react";
const Radio = props => {
  return (
    <div className="RadioButton">
      <input
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        type="radio"
        checked={props.checked}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};
export default Radio;
 

