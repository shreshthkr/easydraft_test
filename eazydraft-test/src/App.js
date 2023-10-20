import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";

function TextItem({ names, age, index, updateDetails }) {

  const handleClick = () => {
    updateDetails(index);
  };
  
  const Name = names;
  const Age = age;


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
    const updatedName = (Math.random().toString(36).substring(2, 7));
    setNames([...names, updatedName]);

    const updatedAge =(Math.floor(Math.random() * 100));
    setAges([...ages, updatedAge]);
    console.log(updatedName)
  }

  function updateDetails(index) {
    //Remove current name and replace with blank
   
    const nameArray = [...names];
    const ageArray = [...ages];

    nameArray[index] = "";
    ageArray[index] = "";

    setNames(nameArray);
    setAges(ageArray);
  }

  //Whenever name is updated, print it
  console.log(names);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the EazyDraft test application.</p>
        <div onClick={addItem}>Click to add a field</div>
        {names?.map((el, index) => (
          <TextItem
            key={index} //unique key for each element
            names={el}
            age={ages[index]}
            index={index}
            updateDetails={() => updateDetails(index)}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
