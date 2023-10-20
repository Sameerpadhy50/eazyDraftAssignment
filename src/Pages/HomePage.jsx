import logo from "../logo.svg";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextItem from "../components/TextItem";


function HomePage() {
  const [personList, setPersonList] = useState([{ name: "Hello", age: 23 }]);
  
// creating a new data when button click
  const addItem = () => {
    const newPerson = {
      name: Math.random().toString(36).substring(2, 7),
      age: Math.floor(Math.random() * 100),
    };
    setPersonList([...personList, newPerson]);
  };

  const updateDetails = (name, age) => {
    const updatedPersonList = personList.filter(
      (person) => person.name !== name
    );
    setPersonList(updatedPersonList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the EazyDraft test application.</p>
        <Button onClick={addItem} >Click to add a person</Button>

        {/* Display the data hear */}
        {personList.map((person, index) => (
          <TextItem
            key={index}
            name={person.name}
            age={person.age}
            updateDetails={() => updateDetails(person.name, person.age)}
          />
        ))}
      </header>
    </div>
  );
}

export default HomePage;
