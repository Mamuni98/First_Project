import React, {useState} from "react";
import UserInput from "./Components/UserInput";
import Users from "./Components/Users";

function App() {
  const [userData, setUserData] = useState([]);
  const addUserList =(newUserData) => {
    setUserData(prevData => {
      return [newUserData, ...prevData];
    });
  }
  return (
    <div>
      <UserInput onAddUser={addUserList}/>
      <Users data={userData}/>
    </div>
  );
}

export default App;
