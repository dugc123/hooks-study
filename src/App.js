import React from "react"
import UseStateExample from "./UseStateExample";
import EffectBasic from "./EffectBasic";
import UseContextExample from './UseContextExample';
import ReducerExample from "./ReducerExample";
import RefExample from "./RefExample";
import MemoExample from "./MemoExample";
import UseCallbackExample from "./UseCallbackExample";
import Sync from "./Sync";
import MyRequestHooks from "./MyRequestHooks";
import CustomHooks from "./CustomHooks";

export default ()=> {
    return (
        <div>
            {/* <UseStateExample />
            <EffectBasic />
            <ReducerExample />
            <UseContextExample />
            <RefExample /> */}
            {/* <MemoExample/> */}
            {/* <UseCallbackExample/> */}
            {/* <Sync/> */}
            <MyRequestHooks/>
            <CustomHooks/>
        </div>
    )
}