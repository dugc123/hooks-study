import React, { useEffect, useState } from "react";

//延迟函数
function sleep(time){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve();
        }, time);
    })
}

async function getPerson(){
    await sleep(2000);

    return ["a","b","c"];
}

function usePerson(){
    const [list,setList] = useState(null);

    async function requset(){
        const person = await getPerson();
        setList(person);
    }
    useEffect(requset,[]);
    return list;
}

export default ()=>{
    const list = usePerson();
    if (list === null) {
        return <div>loading...</div>
    }
    return (
        <span>
            {list.map(item=><div key={item}>{item}</div>)}
        </span>
    )
}