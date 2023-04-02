import React from "react";
const UserDetail =(props) =>{
    const Name = props.name;
    const Age = props.age;
    return <div>
        <h2>{`${Name}(${Age} years old)`}</h2>
    </div>
}
export default UserDetail;