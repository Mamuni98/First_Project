import "./ErrorBox.css";
import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ErrorBox = (props) => {
  return (
    <div>
      <div onClick={props.onConfirm} className="backdrop"/>
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorBox;
