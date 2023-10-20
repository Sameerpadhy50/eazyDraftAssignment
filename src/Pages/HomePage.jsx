import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextItem from "../components/TextItem";
import { Container, Typography, Grid } from "@mui/material";

function HomePage() {
  const [personList, setPersonList] = useState([{ name: "Hello", age: 23 }]);

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
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the EazyDraft test application.
      </Typography>
      <Button variant="contained" onClick={addItem}>
        Click to add a person
      </Button>

      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {personList.map((person, index) => (
          <Grid item xs={3} key={index}>
            <TextItem
              name={person.name}
              age={person.age}
              updateDetails={() => updateDetails(person.name, person.age)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
