import { useState } from "react";
import ChipContainer from "./ChipContainer";

export default function App() {
  const [data, setData] = useState<string[]>([])
  const [input, setInput] = useState<string>('')

  function addChip() {
    setData([...data, input])
    setInput('')
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
  }

  return (
    <div className="app">
      <ChipContainer data={data} />
      <div className="controllers">
        <input type="text" onChange={handleInput} value={input} />
        <button onClick={addChip}>Add</button>
      </div>
    </div>
  )
}
