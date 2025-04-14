import { useState } from 'react';

interface formData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type LoginFormProps = {
  onCancel: () => void;
};

export default function LoginForm({ onCancel }: LoginFormProps) {
  const [formData, setFormData] = useState<formData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 처리 로직 (API 호출 등)
    console.log('가입하기 클릭됨');
  };

  return (
    <>
      <div className="absolute bg-opacity-40 flex-col p-4 items-center justify-center z-50 border-2 border-amber-200 w-100 h-50 mt-12">
        <h3>--회원가입--</h3>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder="이름"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="이메일"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="비밀번호"
          />
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="비밀번호 확인"
          />
          <div className="flex justify-evenly pt-2 mx-2">
            <button onClick={onCancel}>취소</button>
            <button>가입하기</button>
          </div>
        </form>
      </div>
    </>
  );
}
