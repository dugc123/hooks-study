import React, { useRef, useState } from "react";

//使用ref缓存值
export default function UseRefExample(){
    let prev = useRef(null);
    const [count,setCount] = useState(0);
    return(
        <div>
            <p>当前值：{count}</p>
            <p>之前的值：{prev.current}</p>
            <button
                onClick={()=>{
                    prev.current = count;
                    setCount(count+1)
                }}
            >Click me to add</button>
            <button
                onClick={()=>{
                    prev.current = count;
                    setCount(count-1)
                }}
            >Click me to sub</button>
        </div>
    )
}