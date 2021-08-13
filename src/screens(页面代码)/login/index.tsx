import { FormEvent } from "react";
import { useAuth } from "../../context/auth-context";

// const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  const { login, user } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (e.currentTarget.elements[1] as HTMLFormElement).value;
    login({ username, password });
  };
  // console.log(user);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {user ? <div>登录成功，用户名： {user?.name}</div> : null}

      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
