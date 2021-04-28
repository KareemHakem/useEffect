import { Card, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import cuid from "cuid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useState } from "react";

import React from "react";
import "./style.css";

export default function ToDoList() {
  const [number, setNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [usersData, setUsersData] = useState(users);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleId = () => {
    setNumber(cuid());
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // FIXME:

    const value = {
      firstName,
      lastName,
      image,
      id: number,
      age,
    };

    // ...
    setUsersData([...usersData, value]); // FIXME:
    setFirstName("");
    setLastName("");
    setImage("");
    setNumber("");
    setAge("");
  };

  //FIXME:
  // filter users.filter(user => user.id !== 5) // delete
  // find  users.find(user => user.id === 5) 1 object id == 5

  const handleDelete = (id) => {
    setUsersData(usersData.filter((user) => user.id !== id));
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex_col"
        style={{ width: "70%", margin: "auto" }}
      >
        <div className="flex" style={{ width: "100%" }}>
          <input
            className="input"
            placeholder="ID"
            type="text"
            value={number}
          />
          <IconButton onClick={() => handleId()}>
            <AddCircleOutlineIcon style={{ color: "green" }} />
          </IconButton>
        </div>

        <input
          className="input"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => handleFirstName(e)}
        />
        <input
          className="input"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => handleLastName(e)}
        />
        <input
          className="input"
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => handleAge(e)}
        />
        <input
          className="input"
          placeholder="Image (only url)"
          value={image}
          onChange={(e) => handleImage(e)}
        />
        <button type="submit" className="btn_primary" style={{ margin: 30 }}>
          Submit
        </button>
      </form>

      <div
        style={{
          width: "80%",
          margin: "auto",
        }}
      >
        <h1
          className="main_title"
          style={{ textAlign: "center", marginBottom: 200, marginTop: 300 }}
        >
          Receive your ID
        </h1>

        <div className="flex">
          {usersData.map((user) => (
            <Card
              ket={user.id}
              className="card_id"
              style={{ width: 400, margin: 30 }}
            >
              <img src={user.image} className="img" alt=" " />
              <div className="flex">
                <h3 className="span_color">Id</h3>
                <h3>{user.id}</h3>
              </div>
              <div className="flex">
                <h3 className="span_color">Name </h3>
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
              </div>
              <div className="flex">
                <h3 className="span_color">Age</h3>
                <h3>{user.age}</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(user.id)}
                >
                  <DeleteIcon style={{ color: "red" }} />
                </IconButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const users = [
  {
    id: "2037809850394853", //FIXME:
    image: "https://wallpapercave.com/wp/wp7162705.jpg",
    firstName: "Mohamed",
    lastName: "Kareem",
    age: 23,
  },
];
