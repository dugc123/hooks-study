import React, { useMemo, useState } from "react";



// export default ()=>{
//     const [count,setCount] = useState(0);
//     const memorizedText = useMemo(()=>{
//         return `this is a memorized text ${Date.now()}`
//     },[Math.floor(count/10)])

//     return (
//         <div>
//             {memorizedText}
//             <p>You clicked {count} times</p>
//             <button onClick={()=>setCount(count + 1)}>click me</button>
//         </div>
//     )
// }

export default function ComeHere(){
    const [he, setHe] = useState('他在等着')
    const [me, setMe] = useState('我在等着')
    return (
        <>
            <button onClick={()=>{setHe(new Date().getTime())}}>他</button>
            <button onClick={()=>{setMe(new Date().getTime()+',我走来了')}}>我</button>
            <ChildComponent name={he}>{me}</ChildComponent>
        </>
    )
}


function ChildComponent({name,children}){
    function changeHe(name){
        console.log('她来了，她来了。他向我们走来了')
        return name+',他向我们走来了'
    }
//为了解决当我们点击"我"按钮时，"他"对应的changeHe方法不能执行，只有在点击他按钮时才能执行。才能减少子组件的多次没有用的重新渲染
//其实只要使用useMemo，然后给她传递第二个参数，参数匹配成功，才会执行。
    const actionHe = useMemo(()=>changeHe(name),[name]) ;
    
    return (
        <>
            <div>{actionHe }</div>
            <div>{children}</div>
        </>
    )
}
