import { useState } from 'react';
import './App.css';

function MyButton() {
  return <button className="text-amber-400">I'm a Button</button>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <MyButton />
    </>
  );
}

export default App;
