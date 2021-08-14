import { FormEvent } from "react";
import { useAuth } from "../../context(共享)/auth-context";

// const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreen = () => {
  const { register } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (e.currentTarget.elements[1] as HTMLFormElement).value;
    register({ username, password });
  };
  // console.log(user);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">注册</button>
    </form>
  );
};
