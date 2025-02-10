import { useState } from "react";
import ChipContainer from "./ChipContainer";

export default function App() {
  const [data, setData] = useState<string[]>([]);
  const [number, setNumber] = useState<number>(1);

  function addChip() {
    setData([...data, `Chip#${number}`]);
    setNumber(number + 1);
  }

  return (
    <div className="app">
      <ChipContainer data={data} />
      <div className="controllers">
        <button 
          style={{
            padding: '10px 20px',
            borderRadius: '20px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
          onClick={addChip}
        >
          Add chip text
        </button>
      </div>
    </div>
  );
}
