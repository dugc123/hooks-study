import React, { useEffect, useState } from "react"



export default ()=>{
    const [count,setCount] = useState(0);

    function myEffect (){
        const I = setInterval(() => {
            console.log("count",count);
            setCount(x=>x+1);
        }, 1000);
        return ()=>clearInterval(I);
    }
    useEffect(myEffect,[count])
    return <div>{count}</div>
}