import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const [count, setCount] = useState(0);
  const [signupVisible, setSignupVisible] = useState<boolean>(false);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button
          className="text-amber-400"
          onClick={() => setSignupVisible((prev) => !prev)}
        >
          {signupVisible ? '닫기' : '회원가입'}
        </button>
      </div>
      {signupVisible && <LoginForm onCancel={() => setSignupVisible(false)} />}
    </>
  );
}

export default App;
