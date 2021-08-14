import { useAuth } from "../context(共享)/auth-context";
import { ProjectListScreen } from "../screens(页面代码)/project-list";

export const AuthenticatedApp = () => {
  // 退出
  const { logout } = useAuth();

  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />
    </div>
  );
};
