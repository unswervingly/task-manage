import { useEffect, useState } from "react";
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import qs from 'qs'
import { clearObject } from "../../utils/clearObject";

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    // 使用状态提升分享组件状态

    // param 是项目的名称和负责人的id
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    // users 负责人列表数据    从后端的users数据获取
    const [users, setUsers] = useState([]);
    // list  表格数据   从后端的projects数据获取
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    }, [])

    // ?name=${param.name}&personId=${param.personId} 比较麻烦 安装 yarn add qs
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(clearObject(param))}`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [param])

    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    )
}