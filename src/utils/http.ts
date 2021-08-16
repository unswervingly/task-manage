import qs from "qs";
import * as auth from "../auth-provider";
import { useAuth } from "../context(共享)/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
    data?: object,
    token?: string,
}


// axios 和 fetch 的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常
export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config = {}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': data ? 'application/json' : '',
        },
        ...customConfig
    }

    if (config.method.toUpperCase() === 'GET') {
        endpoint += `?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data || {})
    }

    return window.fetch(`${apiUrl}/${endpoint}`, config)
        .then(async res => {
            if (res.status === 401) {
                await auth.logout()
                window.location.reload()
                return Promise.reject({ message: '请重新登录' })
            }
            const data = await res.json();
            if (res.ok) {
                return data
            } else {
                return Promise.reject(data)
            }
        })
}

export const useHttp = () => {
    const { user } = useAuth()

    // TS 操作符
    return (...[endpoint, config]: Parameters<typeof http>) => {
        return http(endpoint, { ...config, token: user?.token })
    }
}