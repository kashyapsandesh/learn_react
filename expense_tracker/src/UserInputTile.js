import React, { useState } from "react";
import "./UserInput.css";
const UserInputTile = (props) => {
  const [gettitle, setgettitle] = useState("");
  const [getdate, setgetDate] = useState("");
  const [getprice, setgetPrice] = useState("");
  const setHandler = (event) => {
    setgettitle(event.target.value);
  };
  const setDate = (event) => {
    setgetDate(event.target.value);
  };
  const setPrice = (event) => {
    setgetPrice(event.target.value);
  };

  const submitData = (event) => {
    event.preventDefault();

    const expenseData = {
      title: gettitle,
      price: getprice,
      date: new Date(getdate),
    };
    setgettitle("");
    setgetDate("");
    setgetPrice("");

    props.onSaveDataHandler(expenseData);
  };

  return (
    <form onSubmit={submitData}>
      <div className="input-container">
        <div className="title-input">
          <input type="text" value={gettitle} onChange={setHandler} />
        </div>
        <div className="date-input">
          <input type="date" value={getdate} onChange={setDate} />
        </div>
        <div className="number-input">
          <input type="number" value={getprice} onChange={setPrice} />
        </div>
        <button className="Add">Add</button>
      </div>
    </form>
  );
};

export default UserInputTile;
