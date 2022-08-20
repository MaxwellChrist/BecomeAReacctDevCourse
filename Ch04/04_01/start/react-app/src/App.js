import './App.css';
import { useState, useEffect, useReducer } from 'react'

function App({ library }) {

  const [emotion, setEmotion] = useState("happy")
  const [secondary, setSecondary] = useState("tired")
  const [checked, setChecked] = useReducer(checked => !checked, false)

  useEffect(() => {
    console.log(`It's ${emotion} and ${secondary} around here!`)
  }, [emotion, secondary])

  return (
    <div className="App">
      <h1>Hello {library}</h1>
      <h2>Current emotion is {emotion}</h2>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>

      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("grateful")}>Grateful</button>
      <button onClick={() => setSecondary("bored")}>Bored</button>
      <button onClick={() => setSecondary("worried")}>Worried</button>

      <input type="checkbox" value={checked} onChange={setChecked}/>
      <label>{checked ? "Checked" : "Not Checked"}</label>
    </div>
  );
}

export default App;
