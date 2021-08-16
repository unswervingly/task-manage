import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { clearObject } from "../../utils/clearObject";
import { useMount } from "../../utils/useMount";
import { useDebounce } from "../../utils/useDebounce";
import { useHttp } from "../../utils/http";

// const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  // 使用状态提升分享组件状态

  // param 是项目的名称和负责人的id
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  // users 负责人列表数据    从后端的users数据获取
  const [users, setUsers] = useState([]);
  // list  表格数据   从后端的projects数据获取
  const [list, setList] = useState([]);
  // 自定义一个hook来简化fetch
  const client = useHttp();

  // 使用自定义hooks
  useMount(() => {
    client("users").then(setUsers);
  });

  // 使用自定义hook useDebounce 减少工程搜索频率
  const debounce = useDebounce(param, 2000);
  useEffect(() => {
    client("projects", { data: clearObject(debounce) }).then(setList);
  }, [debounce, client]);

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
