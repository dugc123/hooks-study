import React,{useEffect,useState} from "react";

function useInterval(callback,time){
    useEffect(()=>{
        const I = setInterval(callback,time);
        return ()=>{
            clearInterval(I);
        }
    },[]);
}

export default function Example(){
    const [count , setCount] = useState(0);

    //读作：依赖XXX([count])变化的作用
    // useEffect(()=>{
    //     if (count > 5) {
    //         window.location.href="https://www.baidu.com"
    //     }
    // },[count])

    useInterval(()=>{
        // setCount(count => count + 1)
    },1000)
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count + 1)}>Click</button>
        </div>
    )
}