import React from "react";
import "./Users.css";
import UserList from "./UserList";
import Card from "../UI/Card";
const Users = (props) => {
  return (
      <Card className="users">
        <ul className="users">
      {props.data.map((detail) => {
        return (
        <UserList 
        key={detail.id} 
        name={detail.name} 
        age={detail.age} />
        );
      })}
      </ul>
      </Card>
  );
};
export default Users;
