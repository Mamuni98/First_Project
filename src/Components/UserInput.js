import React, { useState } from "react";
import Button from "../UI/Button";
import "./UserInput.css";
import Card from "../UI/Card";
import ErrorBox from "../Error/ErrorBox";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const NameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const AgeInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age and name (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    const formData = {
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredAge,
    };

    props.onAddUser(formData);
    setEnteredName("");
    setEnteredAge("");
  };
const errorHandler =() => {
  setError(null);
}
  return (
    <div>
      {error && <ErrorBox title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className="input">
        <form onSubmit={formSubmitHandler}>
          <div className="input">
            <label>User Name</label>
            <input
              type="text"
              value={enteredName}
              onChange={NameInputChangeHandler}
            />
          </div>
          <div className="input">
            <label>User Age</label>
            <input
              type="number"
              step="1"
              value={enteredAge}
              onChange={AgeInputChangeHandler}
            />
          </div>
          <div className="input">
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
