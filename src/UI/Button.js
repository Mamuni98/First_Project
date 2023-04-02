import React from "react";
import "./Button.css";

const Button = (props) => {
    const classes = 'button ' + props.className;
  return (
    <div>
      <button className={classes} type={props.type || "button"} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
