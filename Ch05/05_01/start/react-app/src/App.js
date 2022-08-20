import "./App.css";
import { useState } from "react";

function useInput(initial) {
  const [value, setValue] = useState(initial)
  return [
    {value, onChange: e => setValue(e.target.value)},
    () => setValue(initial)
  ]
}

function App() {
  const [titleProps, resetTitle] = useInput("")
  const [colorProps, resetColor] = useInput("#000000")

  const submit = (e) => {
    e.preventDefault()
    alert(`${titleProps.value}, ${colorProps.value}`)
    resetTitle()
    resetColor()
  }

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title..." />
      <input {...colorProps} type="color" />
      <button>Add</button>

    </form>
  );
}

export default App;