import React,{useState} from "react";

function useCount (initValue){
    const [count , setCount] = useState(initValue);
    return [
        count,
        ()=>{
            setCount(count + 1)
        }
    ];
}
export default ()=>{
    const [count,addCount] = useCount(0);
    return (
        <div>
            Your count:{count}
            <button onClick={()=>addCount()}>Add</button>
        </div>
    )
}

// export default ()=>{
//     const [count,setCount] = useState(0);
//     return (
//         <div>
//             Your count:{count}
//             <button onClick={()=>setCount(count + 1)}>Add</button>
//         </div>
//     )