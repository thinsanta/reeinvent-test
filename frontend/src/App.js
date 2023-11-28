import './App.css';
import { useState } from "react";

function App() {

  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState();

  const getSynonyms = async() =>{
    try {
      
      const response = await fetch("/synonyms")
      if (!response) {
        console.log("Respsonse is not ok! " + response)
      }

      const data = await response.json()

    } catch (error) {
      console.log("error getting synonyms: " + error);
    }
  }

  const addSynonym = async() =>{

    const obj = {
      "word" : word,
      "synonyms" : ["hi","good day"]
    }

    try {
      const response = await fetch("/addsynonym",{
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(obj)
  
      })

      if (!response) {
        console.log("Response is not ok!: " + response)
      }
      console.log(response)
    } catch (error) {
      console.log("Error adding synonym: " + error)
    }
  }

  let inputHandler = (e) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setWord(lowerCase);
  };


  return (
    <div className="App">
       <label htmlFor="word">Word:</label>
        <input onChange={inputHandler} type="text" id="word" name="word" />
        <button onClick={()=>addSynonym()} type="submit">Add</button>
    </div>
  );
}

export default App;
