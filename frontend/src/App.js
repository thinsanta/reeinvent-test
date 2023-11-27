
import './App.css';

function App() {

  const getSynonyms = async() =>{
    try {
      
      const response = fetch("http://localhost:5000/synonyms")
      if (!response) {
        console.log("Respsonse is not ok! " + response)
      }

      const data = await response.json()

    } catch (error) {
      console.log("error getting synonyms: " + error);
    }
  }


  return (
    <div className="App">
       <label for="synonym">Synonym:</label>
        <input type="text" id="synonym" name="synonym" />
        <button type="submit">Add</button>
    </div>
  );
}

export default App;
