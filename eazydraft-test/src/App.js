import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

function TextItem({ names, ages, index, updateDetails }) {
  
  const handleClick = () => {
    updateDetails(names, ages, index);
  };
  
  const Name = names[index];
  const Age = ages[index];


  return (
    <div>
      <p>Name: {Name}</p>
      <p>Age: {Age}</p>
      <Button onClick={handleClick}>Reset Details</Button>
    </div>
  );
}

function App() {
  const [names, setNames] = useState(["Hello"]);
  const [ages, setAges] = useState([23]);

  function addItem() {
    names.push(Math.random().toString(36).substring(2, 7));
    setNames(names);
    ages.push(Math.floor(Math.random() * 100));
    setAges(ages);
  }

  function updateDetails(name, age, index) {
    //Remove current name and replace with blank
    let currentName = names[index];
    let currentAge = ages[index];
    let namearray = names.filter((item) => item !== name);
    let agearray = ages.filter((item) => item !== age);
    namearray.push("");
    agearray.push("");
    setNames(namearray);
    setAges(agearray);
  }

  //Whenever name is updated, print it
  console.log(names);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the EazyDraft test application.</p>
        <div onClick={addItem}>Click to add a field</div>
        {names.map((name, index) => (
          <TextItem
            key={index} //unique key for each element
            names={names}
            ages={ages}
            index={index}
            updateDetails={updateDetails}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
