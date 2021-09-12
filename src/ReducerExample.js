import React, { useReducer } from "react";

function reducer(state,action) {
    switch(action.type){
        case "add":
            return state+1;
        case "sub":
            return state-1;
        default:
            return "--";
    }
}

export default function Counter() {
    const [counter,dispatch] = useReducer(reducer,0)
    return(
        <div>
            Your counter is:{counter}
            <button onClick={()=>dispatch({type:"add"})}>+</button>
            <button onClick={()=>dispatch({type:"sub"})}>-</button>
        </div>
    )
}