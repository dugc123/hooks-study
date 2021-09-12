import React, { useCallback, useState } from "react";

const s = new Set();
export default function(){
    const [count,setCount] = useState(0);

    // const add = ()=>{
    //     setCount(x=>x+1)
    // }
    const add = useCallback(()=>{
        setCount(x=>x + 1)
    },[])
    s.add(add);
    console.log('s.size',s.size);
    
    return (
        <div>
            {count}
            <button onClick={add}>+</button>
        </div>
    )

}