import React from "react";
import UserDetail from "./UserDetail";
import "./UserList.css";
//import Card from "../UI/Card";
const UserList = (props) => {
  return (
  <li className="list">
      <UserDetail name={props.name} age={props.age} />
  </li>)
  
};

export default UserList;
