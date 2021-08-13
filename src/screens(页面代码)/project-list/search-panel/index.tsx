// import { useEffect, useState } from "react"

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = (props: SearchPanelProps) => {
  // const [param, setParam] = useState({
  //     name: '',
  //     personId: ''
  // })

  // const [users, setUsers] = useState([]);
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //     fetch('').then(async res => {
  //         if (res.ok) {
  //             setList(await res.json())
  //         }
  //     })
  // }, [param])

  const { users, param, setParam } = props;

  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(e) => setParam({ ...param, name: e.target.value })}
        />
        <select
          value={param.personId}
          onChange={(e) => setParam({ ...param, personId: e.target.value })}
        >
          <option value={""}>负责人</option>
          {users.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
