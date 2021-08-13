import { useState, useEffect } from 'react'

// 使用自定义hooks 定义一个防抖   减少工程搜索频率

export const useDebounce = <T>(value: T, delay?: number) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        // 每次在value变化之后，设置一个定时器
        const timeout = setTimeout(() => setDebounceValue(value), delay);
        // 每次在上一个useEffect处理完以后再运行
        return () => {
            clearTimeout(timeout);
        }
    }, [value, delay])

    return debounceValue;
}