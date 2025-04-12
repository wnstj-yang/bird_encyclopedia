import { useState } from 'react';
import './App.css';

// interface formData {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const MyButton = () => {
//   return <button className="text-amber-400">회원가입</button>;
// };

const Signup = () => {
  const [signupVisible, setSignupVisible] = useState<boolean>(false);
  // const [formData, setFormData] = useState<formData>({
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });

  return (
    <>
      <div>
        <button
          className="text-amber-400"
          onClick={() => setSignupVisible(true)}
        >
          회원가입
        </button>
      </div>
      {signupVisible && (
        <div className="fixed bg-opacity-40 flex-col p-4 items-center justify-center z-50 border-2 border-amber-200">
          <h3>--회원가입--</h3>
          <form>
            <input type="text" placeholder="이름" />
            <div>
              <button onClick={() => setSignupVisible(false)}>취소</button>
              <button>가입하기</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

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
      {/* <MyButton /> */}
      <Signup />
    </>
  );
}

export default App;
